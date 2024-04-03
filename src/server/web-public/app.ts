import { Hono } from 'hono'
import homeController from './routes/home/controller'
import tasksController from './routes/tasks/controller';

const app = new Hono();

// register routes here
app.route('/', homeController);
app.route('/home', homeController);

app.route('/tasks', tasksController);

export default app;