import swaggerAutogen from 'swagger-autogen';

const swaggerAutogenInstance = swaggerAutogen({
    openapi: '3.0.0',
});

const doc = {
    info: {
        title: 'Health Check API',
        version: '1.0.0',
    },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogenInstance(outputFile, endpointsFiles, doc);
