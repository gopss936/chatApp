const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'RealTime Chat',
    version: '1.0.0',
    description: 'API documentation for chat application',
  },
  servers: [
    {
      url: `http://localhost:5000`, // Update with your server URL
      description: 'Development server',
    },
  ],
};

// Options for the Swagger JSDoc
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ['./routes/*.js'], // Path to the API routes
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
