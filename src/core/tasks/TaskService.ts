import { TaskData } from './TaskData'

export type SearchTaskArgs =
{
    id?: string
}

const taskList: Array<TaskData> = [
    { id: '69', title: 'The first one'},
    { id: '96', title: 'The second one'},
    { id: '420', title: 'The last one'}
];

export async function searchTasks(args?: SearchTaskArgs) : Promise<Array<TaskData>> {
    let result = taskList;
        
    if (args && args.id) {
        result = taskList.filter(t => t.id === args.id);
    }
    
    return await Promise.resolve(result);
};