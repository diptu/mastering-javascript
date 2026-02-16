import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';

dotenv.config();

const swaggerAutogenInstance = swaggerAutogen({
    openapi: '3.0.0',
});

const doc = {
    info: {
        title: 'Health Check API',
        version: '1.0.0',
    },
    servers: [
        {
            url: process.env.API_BASE_URL || 'http://localhost:4000',
            description: process.env.NODE_ENV || 'development',
        },
    ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogenInstance(outputFile, endpointsFiles, doc);
