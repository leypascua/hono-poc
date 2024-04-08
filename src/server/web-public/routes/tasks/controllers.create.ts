import { Hono } from 'hono'
import { searchTasks } from '@core/tasks/TaskService'
import { TaskListView, TaskDetailsView } from './views'


const taskCreateController = new Hono();


taskCreateController.get('/', async (c) => {
    return c.text('get taskCreateController');
});

taskCreateController.post('/', async (c) => {
    return c.text('post taskCreateController');
});


export default taskCreateController;