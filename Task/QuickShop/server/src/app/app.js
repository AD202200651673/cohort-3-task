import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from '../routes/auth.route.js';
import productRoute from '../routes/product.route.js';

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin(origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173',
            'https://cohort-3-task-1.onrender.com'
        ];

        if (
            !origin ||
            allowedOrigins.includes(origin) ||
            (process.env.NODE_ENV !== 'production' && (
                /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin) ||
                /^http:\/\/(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})(?::\d+)?$/.test(origin)
            ))
        ) {
            callback(null, true);
            return;
        }

        callback(new Error(`CORS origin not allowed: ${origin}`));
    },
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);

export default app;