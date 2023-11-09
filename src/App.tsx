import React, {useState} from 'react';
import './App.css';
import NewComponent from "./site/NewComponent";
import TopCars from "./site/TopCars";
import Button from "./site/Button";
import Dollars from "./site/Dollars";
import ComponentForTasks from "./site/ComponentForTasks";


export type ArgType = 1 | 2 | 3

function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber + ' at the age of ' + age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber + ' at the age of ' + age)
    }
    const Button3Foo = () => {
        console.log('hello')
    }

    const students = [
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    let [a, setA] = useState(100)

    const onClickForButtonHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickForButton2Handler = () => {
        setA(0)
    }
    const [money, setMoney] = useState([
        {banknote: "dollar ", nominal: 100, number: " a123456789"},
        {banknote: "dollar ", nominal: 50, number: " b123456789"},
        {banknote: "ruble ", nominal: 100, number: " c123456789"},
        {banknote: "dollar ", nominal: 100, number: " d123456789"},
        {banknote: "dollar ", nominal: 50, number: " e123456789"},
        {banknote: "ruble ", nominal: 100, number: " f123456789"},
        {banknote: "dollar ", nominal: 50, number: " j123456789"},
        {banknote: "ruble ", nominal: 50, number: " h123456789"}
    ])
    let [currentMoney, setCurrentMoney] = useState(money)
    const onClickHandler = (arg: ArgType) => {
        switch (arg) {
            case 1:
                setCurrentMoney(money)
                break;
            case 2:
                setCurrentMoney(money.filter(filteredMoney => filteredMoney.banknote.trim() == 'ruble'))
                break;
            case 3:
                setCurrentMoney(money.filter(filteredMoney => filteredMoney.banknote.trim() == 'dollar'))
                break;
        }
    }

    return (
        <div>
            <Dollars currentMoney={currentMoney} handler={onClickHandler}/>



            {a}
            <button onClick={onClickForButtonHandler}>Number++</button>
            <button onClick={onClickForButton2Handler}>0</button>

            <NewComponent students={students}/>
            <TopCars cars={topCars}/>
            <Button name={'YT channel 1'} callBack={()=>Button1Foo('I\'m Vasya', 21)}/>
            <Button name={'YT channel 2'} callBack={()=>Button2Foo('I\'m Ivan', 22)}/>
            <Button name={"I'm stupid Button ever"} callBack={Button3Foo}/>
            <ComponentForTasks />
        </div>

    );
}

export default App;