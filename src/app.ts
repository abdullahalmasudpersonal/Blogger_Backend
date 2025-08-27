import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';

const app: Application = express();

const corsOptions = {
  origin: ['https://blogger-client-ruddy.vercel.app', 'http://localhost:3000'],
  credentials: true,
};


/// parsers
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Blogger Backend In Progress!');
});

app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
