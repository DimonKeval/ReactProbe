import React from 'react';
import {Greeting} from "./Greeting";
import {AllData} from "./AllData";
import {BetterNester} from "./BetterNester";
import {Link} from "react-router-dom";
import {Questionnaire} from "./Questionnaire";

export function MyComponent(props) {

    if (props.create){
        return <div>
            <Questionnaire users={props.users} setArray={props.setArray}/>
        </div>;
    }

    if (!isNaN(props.id)) {
        return <div>
            {props.users.map(
                (el, index) => {
                    if (index === props.id) {
                        return renderPerson(el);
                    }
                }
            )
            }
        </div>;
    } else {

        return <>
            {/*Hello {props.name}!*/}
            {/*<Greeting name={props.name}/>*/}
            {/*<Greeting{...props}/>*/}
            {/*/!*{array.map(renderPerson)}*!/*/}
            {tablingPersons()}
        </>;
    }


    function renderPerson(el) {
        const name = el.name;
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
            <Link to={'/users'}>Do you want to go back to list?</Link>
            <br/>
            <Link onClick={() => {props.setArray(props.users.filter(el => el.name !== name))}} to={'/users'}>Delete user</Link>
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
            {props.users.map(fillTable)}
            </tbody>
        </table>
    }

    function fillTable(el, index) {
        return <tr key={index}>
            <td><Link to={'/users/' + index}>More</Link></td>
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
}
