import React, {FC} from 'react'


type TaskPropsType = {
    i: DataType
}
type DataType = {
    title: string,
    tasks: Array<TasksType>,
    students: Array<string>
}
type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}


const Task: FC<TaskPropsType> = ({i}) => {
    let arr = []
    arr.push(i.tasks.map(el => <p>#{el.taskId}. <input type={'checkbox'} checked={el.isDone}/> {el.title}</p>))


    return (
        <div>
            <p>{i.title}</p>
            {arr}
            <p>List of students, who have good chances to become Frontend developer:</p>
            {i.students.map(el=> <p>  {el}</p>)}

        </div>
    )
}

export default Task