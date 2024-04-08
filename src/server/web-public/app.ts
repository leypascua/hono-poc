import { Hono } from 'hono'
import homeController from './routes/home/controller'
import taskIndexController from './routes/tasks/controllers.index';
import taskCreateController from './routes/tasks/controllers.create';

const app = new Hono();

// register routes here
app.route('/', homeController);
app.route('/home', homeController);

app.route('/tasks', taskIndexController);
app.route('/tasks/create', taskCreateController);

export default app;