import { html, raw } from 'hono/html'
import { FC } from 'hono/jsx'
import { Head } from './Components'
import { JSXNode } from 'hono/jsx'

interface PageProps {
  title?: string,
  children: any
}

const Page = (props: PageProps) => {
  let head: any = undefined;
  let children: Array<any> = [];

  if (props.children.forEach) {
    // @ts-ignore
    props.children.forEach(child => {
      const isHead = child.tag && 
        typeof child.tag === 'function' &&
        (child.tag.name && child.tag.name === "Head");

      if (isHead) {
        head = child;
      }
      else {
        children.push(child);
      }
    });
  }
  else {
    children = props.children;
  }
  
  
  let headTexts: string = '';
  if (head && head.children) {
    // @ts-ignore
    head.children.forEach(c => {
      if (headTexts.length > 0) {
        headTexts = headTexts + "\r\n";
      }
      headTexts = headTexts + raw(c);
    });
  }

  return html`<!DOCTYPE html>
    <html>
    <head>
        <title>${props.title || 'I am the default title'}</title>
        ${raw(headTexts)}
    </head>
    <body>
      ${children}
    </body>
    </html>`
};

const Content: FC = (props) => (
  <>
    <header>
      <h1>This is the header</h1>
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      This is the footer.
    </footer>
  </>
);

export { Page, Content };
