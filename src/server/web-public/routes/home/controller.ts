import { Hono } from 'hono'
import {HomeView} from './views'

const homeController = new Hono();

homeController.get('/', (c) => {
    const { fname, lname } = c.req.query();
    
    const vm = {
        firstName: fname || "foo",
        lastName: lname || "BAR"
    }
    
    return c.render(HomeView(vm));
});

export default homeController;