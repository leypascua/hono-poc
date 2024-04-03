import { Hono } from 'hono'
import publicWebApp from './web-public/app'
import adminWebApp from './web-admin/app'
import webApi from './web-api/app'
import { serveStatic } from 'hono/cloudflare-workers'

// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'

const app = new Hono();

app.get('/static/*', serveStatic({ root: './', manifest }))
app.get('/favicon.ico', serveStatic({ path: './favicon.ico', manifest }))

// register web apps here
app.route('/p', publicWebApp);
app.route('/admin', adminWebApp);
app.route('/api', webApi);

app.get('/', (c) => {
  return c.redirect('/p');
});

export default app