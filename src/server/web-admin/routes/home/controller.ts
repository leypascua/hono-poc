import { Hono } from 'hono'

const homeController = new Hono();

homeController.get('/', c => c.text('This is the secure admin home page.'));

export default homeController;