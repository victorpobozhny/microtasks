import React, {FC} from 'react'


type PropsButtonType = {
    name: string
    callBack: () => void
}

const Button: FC<PropsButtonType> = (props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )

}

export default Button;