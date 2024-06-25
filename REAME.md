# Backend Setup Guide

## Prerequisites

Before you start, ensure you have the following:

1. **Node.js** and **npm** installed on your machine.
2. **MySQL** database server running.
3. **Cloudinary** account for image storage.

## Steps to Set Up the Project

### 1. Create an Account in Cloudinary

- Go to [Cloudinary](https://cloudinary.com/).
- Sign up for a new account if you don't already have one.

### 2. Create an API Key in Cloudinary

- After creating an account, navigate to the **Dashboard**.
- Note down your **Cloud Name**, **API Key**, and **API Secret**.

### 3. Prepare the MySQL Database

- Create a new database in MySQL. You will need the database name, username, password, and host information.

### 4. Create a `.env` File

Create a `.env` file in the root directory of your project and add the following environment variables:

- PORT=3000 # Optional, defaults to 3000 if not specified
- DB_DEV_USERNAME=your_db_username
- DB_DEV_PASSWORD=your_db_password
- DB_DEV_NAME=your_db_name
- DB_DEV_HOST=your_db_host

- CLOUD_NAME=your_cloudinary_cloud_name
- CLOUDINARY_KEY=your_cloudinary_api_key
- CLOUDINARY_SECRET=your_cloudinary_api_secret

Replace the placeholder values with your actual database and Cloudinary credentials.

## Before Running the Application

### 1. Install the necessary dependencies:

```bash
   npm install
```

### 2. Run database migrations to set up your tables:

```bash
   npx sequelize-cli db:migrate
```

### 3. Seed the database with initial data:

```bash
   npx sequelize-cli db:migrate
```

## Running the application

To start the application in development mode, run:

```bash
   npm run dev
```

## Additional Notes

- Ensure your MySQL server is running and accessible with the credentials provided in the .env file.
- If you encounter any issues, check the console logs for error messages and ensure all environment variables are correctly set.
