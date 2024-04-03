import { html, raw } from 'hono/html'
import { Page, Content } from '../../ui/layout'
import { Meta, Head, ClientScript } from '../../ui/Components'

export type IndexViewModel =
{
    firstName: string,
    lastName?: string
}

const HomeView = (props: IndexViewModel) => (
<Page title="This is a view-specific title.">
    {/* sometimes, we need to add page-specific stuff into <head> */}
    <Head>
        <Meta name="description" content="Free web tutorials" />
        <ClientScript>
            console.log('give head');
        </ClientScript>
    </Head>

    <Content>
        <h2>Hello world, {props.firstName} {props.lastName}!</h2>
        <p>The quick brown fox jumps over the lazy dog.</p>
    </Content>

    this is a lost child.

    <script src="/static/test.js" type="text/javascript"></script>
    
    {/* this code block is executed client-side */}
    <ClientScript>
        {/* call a function from client-side script */}
        sayFoo();
        console.log('bottom nao');
    </ClientScript>
</Page>
);

export {HomeView};