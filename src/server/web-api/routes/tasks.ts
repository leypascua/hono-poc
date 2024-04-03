import { Hono } from 'hono'
import { searchTasks } from '@core/tasks/TaskService'

const TasksApi = new Hono();

TasksApi.get('/', async (c) => {
    const results = await searchTasks();
    
    return c.json({
        results
    });
});

export default TasksApi;
