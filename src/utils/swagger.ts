import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Epicure API',
      version: '1.0.0',
      description: 'Documentation for Epicure API'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: [path.join(__dirname, '../api/**/*.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
