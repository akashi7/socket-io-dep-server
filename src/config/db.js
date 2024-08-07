// db.js

import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

const disconnectDatabase = async () => {
  await prisma.$disconnect();
  console.log('Database disconnected');
};

export { prisma, connectDatabase, disconnectDatabase }

