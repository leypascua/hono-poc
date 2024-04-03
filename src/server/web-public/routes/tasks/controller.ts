import { Hono } from 'hono'
import { searchTasks } from '@core/tasks/TaskService.js'
import IndexView, { TasksIndexViewModel } from './v_Index.js'
import TaskDetailView from './v_TaskDetail'

const tasksController = new Hono();

tasksController.get('/', async (c) => {
    
    // hit a database
    const tasks = await searchTasks();
    var vm: TasksIndexViewModel = { tasks };

    return c.render(IndexView(vm));
});

tasksController.get('/:id', async (c) => {
    const results = await searchTasks({ id: c.req.param('id') })

    return results === undefined || (results && results.length === 0) ?
        c.notFound() :
        c.render(TaskDetailView(results[0]));
});

export default tasksController;