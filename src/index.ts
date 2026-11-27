import express from 'express';
import { router } from './notifications.routes';

const app = express();
app.use(express.json());
app.use('/notifications', router);
app.get('/health', (_, res) => res.json({ ok: true }));
app.listen(Number(process.env.PORT ?? 3000));
