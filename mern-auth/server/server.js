import express from 'express';
import 'dotenv/config';
import { setupSwagger } from './swagger/index.js';
import cookieParser from 'cookie-parser';
import connectionDB from './config/mongodb.js'
import cors from 'cors'
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional
app.use(cookieParser());
app.use(cors({ credentials: true }));
/* Swagger */
setupSwagger(app);

connectionDB();


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

const port = process.env.PORT || 4000;
/* Server */
app.listen(port, () => {
    console.log(`Server: http://localhost ${port}`);
    console.log(`Docs:   http://localhost: ${port} / api - docs`);
});
