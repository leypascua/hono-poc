import { Hono } from 'hono'
import { searchTasks } from '@core/tasks/TaskService'
import { TaskListView, TaskDetailsView } from './views'


const tasksController = new Hono();

tasksController.get('/', async (c) => {
    // hit a database
    const tasks = await searchTasks();
    const vm = { tasks };

    return c.render(TaskListView(vm));
});

tasksController.get('/:id', async (c) => {
    const results = await searchTasks({ id: c.req.param('id') })

    return results === undefined || (results && results.length === 0) ?
        c.notFound() :
        c.render(TaskDetailsView(results[0]));
});

export default tasksController;