import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    onClickHandler: (title: string) => void
}

export function FullInput(props: FullInputPropsType) {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.onClickHandler(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}