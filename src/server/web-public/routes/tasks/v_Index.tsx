import { TaskData } from "@core/tasks/TaskData";

export type TasksIndexViewModel = 
{
    tasks: Array<TaskData>
}

const View = (props: TasksIndexViewModel) => (
    <>
        <h1>Tasks</h1>
        <p>Here are your [{props.tasks.length}] tasks:</p>
        <ul>
            {props.tasks.map((t, i) => {
                return (
                    <li>{t.title}</li>
                )
            })}
        </ul>
    </>
);

export default View;