import React, {FC} from 'react'


type TopCarsType = {
    manufacturer: string
    model: string
}
type TopCarsPropsType = {
    cars: Array<TopCarsType>
}

const TopCars: FC<TopCarsPropsType> = ({cars}) => {


    let tablePart = []
    tablePart.push(cars.map((el, index) => {
        return (<tr>
                    <td>{index+1}</td>
                    <td>{el.manufacturer}</td>
                    <td>{el.model}</td>
                </tr>)

    }))


    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {tablePart}
        </table>
    )

}
export default TopCars;
