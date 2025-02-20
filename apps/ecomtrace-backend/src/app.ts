import express from 'express';
import middleware from './middleware';
import indexRoutes from './routes/index';
import activitiesRoutes from './routes/activities';
import './config/env';
import connectToDb from './config/connect.db';

const app = express();

middleware(app);
connectToDb();

app.use('/', indexRoutes);
app.use('/', activitiesRoutes);

export default app;
