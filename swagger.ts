import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc, { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Wallet Service',
    version: '1.0.0',
    description: 'API documentation for Wallet Service',
  },

  servers: [{ url: `http://localhost:3000` }],
  schemes: [
    "http"
  ],
  
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(options);

export const setupSwagger = (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};