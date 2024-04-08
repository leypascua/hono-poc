import {raw} from 'hono/html'
import {TaskData} from '@core/tasks/TaskData'
import {FC} from 'hono/jsx'
import { ClientScript } from '../../../ui/Components'
import { Page, PageProps, Content } from '../../../ui/layout'

const TaskListView = (props: {tasks: Array<TaskData>}) => (
    <Page title="Task List">
        <Content>
            <h1>Tasks</h1>
            <p>Here are your [{props.tasks.length}] tasks:</p>
            <ul>
                {props.tasks.map((t, i) => {
                    return (
                        <li>{t.title}</li>
                    )
                })}
            </ul>
        </Content>
        <script type="application/javascript">
        {raw`
            // fugly... but works
            (function() {
                console.log('hello from the bottom of TaskListView.');
                console.log('This code was executed in an iife');
            })();
        `}
        </script>
    </Page>
);

export default TaskListView;