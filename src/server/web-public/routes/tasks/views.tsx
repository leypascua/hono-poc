import {raw} from 'hono/html'
import {TaskData} from '@core/tasks/TaskData'
import {FC} from 'hono/jsx'
import { ClientScript } from '../../ui/Components'
import { Page, PageProps, Content } from '../../ui/layout'

// put one view per file if it gets crowded

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

const TaskDetailsView = (props: TaskData) => {
    const pp = {
        title: "Task Details - " + props.id
    };

    return (
        <Page {... pp}>
            <h1>Task Details</h1>
            <table>
                <tr>
                    <td>ID</td>
                    <td>{props.id}</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>
                        {props.title}
                    </td>
                </tr>
            </table>
        </Page>
    );
}

export {TaskListView, TaskDetailsView};