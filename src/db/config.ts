import { DatabaseError } from '@/utils/error-utils';
import { MongoClient } from 'mongodb';
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

export async function connectDb() {
  try {
    const client = await clientPromise;
    const db = client.db();
    return db;
  } catch (error) {
    throw new DatabaseError('Failed to establish connection to database');
  }
}
