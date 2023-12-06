import React from "react";
import {ArgType} from "../App";

type Component7PropsType = {
    currentMoney: Array<MoneyType>,
    handler: (arg:ArgType)=>void
}
type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}

const Dollars = (props: Component7PropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index + 1}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => props.handler(1)}>All</button>
                <button onClick={() => props.handler(2)}>Ruble</button>
                <button onClick={() => props.handler(3)}>Dollar</button>
            </div>
        </div>
    )
}

export default Dollars