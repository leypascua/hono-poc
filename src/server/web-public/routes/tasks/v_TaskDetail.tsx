import {TaskData} from '@core/tasks/TaskData'

const View = (props: TaskData) => (
    <>
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
    </>
);

export default View;