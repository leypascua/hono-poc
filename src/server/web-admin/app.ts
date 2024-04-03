import { Hono } from 'hono'
import homeController from './routes/home/controller'

const app = new Hono();

app.route('/', homeController);
app.route('/home', homeController);

export default app;