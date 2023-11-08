import React, {FC} from 'react'


type NewComponentPropsType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}


const NewComponent: FC<NewComponentPropsType> = (props) => {
    const studentsArray = []
    studentsArray.push(props.students.map(el => {
        return <li>Hello, my name is {el.name}, I'm {el.age} years old, my id number is {el.id}!</li>
    }))

    return (
        <ul>
            {studentsArray}
        </ul>
    )
}

export default NewComponent;
