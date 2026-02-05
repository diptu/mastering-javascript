import express from 'express';
import { setupSwagger } from './swagger/index.js';

const app = express();

/* Swagger */
setupSwagger(app);

/* Routes */
// #swagger.tags = ['Health']
// #swagger.summary = 'Health check'
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
    });
});

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World',
        timestamp: new Date().toISOString(),
    });
});

/* Server */
app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
    console.log('Docs:   http://localhost:3000/api-docs');
});
