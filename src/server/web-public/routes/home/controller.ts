import { Hono } from 'hono'
import IndexView from './views.Index'

const homeController = new Hono();

homeController.get('/', (c) => {
    const { fname, lname } = c.req.query();
    
    const vm = {
        firstName: fname || "foo",
        lastName: lname || "BAR"
    }
    
    return c.render(IndexView(vm));
});

export default homeController;