import { Hono } from 'hono'
import TasksApi from './routes/tasks'

const app = new Hono();

app.route('/tasks', TasksApi);

export default app;