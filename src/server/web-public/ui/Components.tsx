import { FC } from 'hono/jsx'
import { raw } from 'hono/html'

const Meta: FC<{name: string, content: string}> = (props: {name: string, content: string}) => (
    <>
    <meta {...props} />
    </>
);

const Head: FC = (props) => {
    return raw(props.children);
}

const ClientScript: FC = (props) => (
    <script type="text/javascript">
        {raw(props.children)}
    </script>
);

export { Meta, Head, ClientScript };