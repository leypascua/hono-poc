import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import publicWebApp from './web-public/app'
import adminWebApp from './web-admin/app'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './assets' }))

// register web apps here
app.route('/p', publicWebApp);
app.route('/admin', adminWebApp);

app.get('/', (c) => {
  return c.redirect('/p');
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
});
