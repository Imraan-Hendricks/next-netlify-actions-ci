import { BadRequestError, DatabaseError } from '@/utils/error-utils';
import { MongoClient, ObjectId } from 'mongodb';
import { MONGO_URI, NODE_ENV } from '@/utils/env-utils';

const options = {};

if (!MONGO_URI)
  throw new DatabaseError('Please add your Mongo URI environment variable');

let client = new MongoClient(MONGO_URI, options);
let clientPromise: Promise<MongoClient>;

interface CustomGlobal {
  _mongoClientPromise?: Promise<MongoClient>;
}

declare const global: CustomGlobal;

if (NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

async function connectDb() {
  try {
    const client = await clientPromise;
    const db = client.db();
    return db;
  } catch (error) {
    throw new DatabaseError('Failed to establish connection to database.');
  }
}

export async function getCollection<T extends {}>(name: string) {
  try {
    const db = await connectDb();
    const collection = db.collection<T>(name);
    return collection;
  } catch (error) {
    if (error instanceof DatabaseError) throw error;
    throw new DatabaseError('Failed to get collection.');
  }
}

export function parseObjectId(_id: unknown) {
  if (!_id) throw new BadRequestError('ID is required.');
  if (typeof _id !== 'string' && typeof _id !== 'number')
    throw new BadRequestError('Invalid ID.');
  if (!ObjectId.isValid(_id)) throw new BadRequestError('Invalid ID.');
  return new ObjectId(_id);
}
