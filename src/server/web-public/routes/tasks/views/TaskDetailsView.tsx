import {raw} from 'hono/html'
import {TaskData} from '@core/tasks/TaskData'
import {FC} from 'hono/jsx'
import { ClientScript } from '../../../ui/Components'
import { Page, PageProps, Content } from '../../../ui/layout'

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

export default TaskDetailsView;