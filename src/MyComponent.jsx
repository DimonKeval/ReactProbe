import React from 'react';
import {Greeting} from "./Greeting";
import {AllData} from "./AllData";
import {BetterNester} from "./BetterNester";
import {Link} from "react-router-dom";

const array = [
    {
        name: 'Tom',
        lastName: 'Smith',
        pesel: '12345678901',
        phoneNumber: '+48123456789',
        email: 'emailfortest@email.email',
        street: 'StreetName',
        buildNumber: '123',
        apartmentNumber: '321',
        city: 'BigCity',
        country: 'NiceCountry'
    },
    {
        name: 'Alex',
        lastName: 'Joah',
        pesel: '47563489123',
        phoneNumber: '+48000333999',
        email: 'urecheabledestinatioin@email.email',
        street: 'Somewhere',
        buildNumber: '1',
        apartmentNumber: '9',
        city: 'FunnyPlace',
        country: 'Everywhere'
    },
    {
        name: 'Test',
        lastName: 'Testowy',
        pesel: '88334455032',
        phoneNumber: '+380067234567',
        email: 'sendmessage@email.email',
        street: 'CoolLine',
        buildNumber: '5',
        apartmentNumber: '7',
        city: 'BurgStadt',
        country: 'Wundershoenland'
    }
];


export function MyComponent(props) {

    if (!isNaN(props.id)) {
        return <div>
            {array.map(
                (el, index) =>
                    {if (index === props.id){
                        return renderPerson(el);
                        }
                    }
                )
            }
        </div>;
    } else{

    return <>
        {/*Hello {props.name}!*/}
        {/*<Greeting name={props.name}/>*/}
        {/*<Greeting{...props}/>*/}
        {/*/!*{array.map(renderPerson)}*!/*/}
        {tablingPersons()}
    </>;}
}

function renderPerson(el) {
    return <><AllData
        name={el.name}
        lastName={el.lastName}
        pesel={el.pesel}
        phoneNumber={el.phoneNumber}
        email={el.email}
        street={el.street}
        buildNumber={el.buildNumber}
        apartmentNumber={el.apartmentNumber}
        city={el.city}
        country={el.country}
    />
        <Link to={'/'}>Do you want to go back to list?</Link>
    </>;
}

function tablingPersons() {
    return <table border="1">
        <thead>
        <tr>
            <td></td>
            <td>name</td>
            <td>lastName</td>
            {/*<td>pesel</td>*/}
            {/*<td>phoneNumber</td>*/}
            {/*<td>email</td>*/}
            {/*<td>street</td>*/}
            {/*<td>buildNumber</td>*/}
            {/*<td>apartmentNumber</td>*/}
            {/*<td>city</td>*/}
            {/*<td>country</td>*/}
        </tr>
        </thead>
        <tbody>
        {array.map(fillTable)}
        </tbody>
    </table>
}

function fillTable(el) {
    return <tr>
        <td><Link to={'/' + el.name.toLowerCase()}>More</Link></td>
        <td>{el.name}</td>
        <td>{el.lastName}</td>
        {/*<td>{el.pesel}</td>*/}
        {/*<td>{el.phoneNumber}</td>*/}
        {/*<td>{el.email}</td>*/}
        {/*<td>{el.street}</td>*/}
        {/*<td>{el.buildNumber}</td>*/}
        {/*<td>{el.apartmentNumber}</td>*/}
        {/*<td>{el.city}</td>*/}
        {/*<td>{el.country}</td>*/}
    </tr>
}
