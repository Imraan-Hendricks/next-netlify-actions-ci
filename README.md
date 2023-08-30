# Next.js Netlify GitHub Actions CI/CD

Welcome to the **Next.js Netlify GitHub Actions CI/CD** project! This repository serves as a guide and example for setting up Continuous Integration and Continuous Deployment (CI/CD) for Next.js applications using GitHub Actions and Netlify.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Continuous Integration and Deployment](#continuous-integration-and-deployment)
- [Leveraging Netlify's Features](#leveraging-netlifys-features)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Introduction

Modern web development demands efficient and automated CI/CD processes. This project demonstrates the integration of GitHub Actions and Netlify for automating the build, test, and deployment pipeline of a Next.js application.

## Getting Started

To get started with using this project as a template for your own Next.js application, follow these steps:

### Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (v18.16.0 or higher)
- npm (v9.5.1 or higher)

<br />

1&nbsp;) Clone this repository:

```shell
git clone https://github.com/Imraan-Hendricks/next-netilify-actions-ci.git
```

2&nbsp;) Navigate to the project directory:

```shell
cd next-netilify-actions-ci
```

3&nbsp;) Install the dependencies:

```shell
npm ci
```

4&nbsp;) Configure environment variables:

- Create a .env.development.local file and a .env.test.local file in the root directory of the project. Sample files are provided in the expected location for reference. In a production environment, make sure to configure the environment variables on the host server.

- For executing end-to-end tests with Cypress, create a cypress.env.json file in the root directory and include the necessary variables. A sample file is provided for reference. The presence of this file is mandatory for running end-to-end tests with Cypress.

### Development

To run the application in development mode:

```shell
npm run dev
```

Open your browser and visit http://localhost:3000 to view the application.

### Production Build

To build the application for production:

```shell
npm run build
```

After the build is complete, start the application in production mode with the following command:

```shell
npm start
```

Remember to configure your production environment accordingly before starting the application.

<br />

## Continuous Integration and Deployment

Next Netlify Actions CI utilizes continuous integration and deployment through Netlify and GitHub Actions to streamline the development and deployment process. This ensures that your application is built, tested, and deployed automatically, allowing you to focus on coding rather than manual setup.

### Continuous Integration Workflow

Two separate GitHub Actions workflows are included in the project:

1. **PR Validation (pr-validation.yml):** This workflow runs whenever a pull request is made to the main branch. It sets up a staging deployment on Netlify, enabling you to preview changes and test your application in a controlled environment before pushing to production. The staging site will be accessible at https://staging--YOUR_SITE_NAME.netlify.app or https://staging--YOUR_CUSTOM_DOMAIN, allowing you to preview your changes and gather feedback before final deployment.

2. **Deploy to Production (deploy-production.yml):** This workflow is designed to be triggered when a pull request is successfully merged into the main branch. It deploys your application to the production environment on Netlify, making your changes live for users. The idea is that you won't ever push directly to the main branch. Instead, you push your feature branch, create a pull request to merge to main, and this merge triggers the production deployment workflow.

### Environment Variables

For security and configuration, environment variables are managed using GitHub Secrets. To configure the CI/CD process for both staging and production environments, follow these steps:

1. Define environment variables in GitHub Secrets. Prefix variables with STAGING\_ for staging and PRODUCTION\_ for production. Set variables like STAGING_MONGODB_URI or PRODUCTION_API_KEY.

2. Set the NETLIFY_AUTH_TOKEN secret using your Netlify account's personal access token. Additionally, you must provide the NETLIFY_SITE_ID as a secret. This site ID links your repository with the appropriate Netlify site.

<br />

### Leveraging Netlify's Features

By deploying your Next.js application with Netlify through Next Netlify Actions CI, you also reap the benefits of Netlify's robust platform:

- **CDN Caching:** Netlify automatically leverages Content Delivery Network (CDN) caching to optimize the delivery of your application's assets, reducing load times and improving user experience.
- **Serverless Functions:** You can leverage Netlify's serverless functions to create powerful backend functionality without managing server infrastructure. This enables you to build dynamic APIs and handle backend tasks directly from your frontend codebase.
- **Edge Functions:** Netlify allows you to run JavaScript functions at the edge, closer to your users, reducing latency and enhancing performance. This enables you to create personalized and dynamic content on a global scale.
- **Free Domains:** Netlify provides free subdomains under netlify.app, allowing you to instantly share and showcase your work with others.
- **Custom Domains:** Easily connect your own custom domain to your Netlify site. This gives your application a professional and branded web address.
- **Automatic HTTPS:** Netlify provides SSL certificates for your domains by default, ensuring secure connections between users and your application.
- **Build Plugins:** Customize your build process with Netlify Build Plugins, enabling integration with various tools and services to enhance your deployment pipeline.

<br />

---

<br />

For more detailed information, advanced usage, and customization options, please refer to the [documentation](https://github.com/Imraan-Hendricks/next-netilify-actions-ci).

### Contributing

Contributions are always welcome! If you encounter any issues, have suggestions, or want to contribute improvements, please open an issue or submit a pull request in the [Github repository](https://github.com/Imraan-Hendricks/next-netilify-actions-ci).

### Support

If you have any questions, issues, or need assistance, please feel free to reach out to our support team at support@imraanhendricks.com. We are here to help and will get back to you as soon as possible.

### License

This project is licensed under the [MIT License](https://github.com/Imraan-Hendricks/next-netilify-actions-ci/blob/main/LICENSE).
