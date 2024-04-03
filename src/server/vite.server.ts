import { Hono } from 'hono'
import publicWebApp from './web-public/app'
import adminWebApp from './web-admin/app'
import webApi from './web-api/app'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './assets/' }))

// register web apps here
app.route('/p', publicWebApp);
app.route('/admin', adminWebApp);
app.route('/api', webApi);

app.get('/', (c) => {
  return c.redirect('/p');
});

export default app;
