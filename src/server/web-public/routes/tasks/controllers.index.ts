import { Hono } from 'hono'
import * as taskService from '@core/tasks/TaskService'
import { TaskListView, TaskDetailsView } from './views'


const taskIndexController = new Hono();

taskIndexController.get('/', async (c) => {
    // hit a database
    const tasks = await taskService.searchTasks();
    const vm = { tasks };

    return c.render(TaskListView(vm));
});

taskIndexController.get('/:id', async (c) => {
    const results = await taskService.searchTasks({ id: c.req.param('id') })

    return results === undefined || (results && results.length === 0) ?
        c.notFound() :
        c.render(TaskDetailsView(results[0]));
});

export default taskIndexController;