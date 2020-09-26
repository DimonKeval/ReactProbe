import React from 'react';
import {Greeting} from "./Greeting";
import {AllData} from "./AllData";

const array = [
    {name: 'Tom', lastName: 'Smith', pesel: '12345678901', phoneNumber: '+48123456789', email: 'emailfortest@email.email',street: 'StreetName', buildNumber: '123', apartmentNumber: '321',city: 'BigCity', country: 'NiceCountry'},
    {name: 'Alex', lastName: 'Joah', pesel: '12345678901', phoneNumber: '+48123456789', email: 'emailfortest@email.email',street: 'StreetName', buildNumber: '123', apartmentNumber: '321',city: 'BigCity', country: 'NiceCountry'},
    {name: 'Test', lastName: 'Testowy', pesel: '12345678901', phoneNumber: '+48123456789', email: 'emailfortest@email.email',street: 'StreetName', buildNumber: '123', apartmentNumber: '321',city: 'BigCity', country: 'NiceCountry'}
];

export  function MyComponent(props){
    return <p>Hello {props.name}!
        <Greeting name={props.name}/>
        <Greeting{...props}/>
        {array.map(renderPerson)}
    </p>;
}

function renderPerson(el, index) {
    return <div key={index}>
        <p>{el.name}</p>
        <p>{el.lastName}</p>
        <p>{el.pesel}</p>
        <p>{el.phoneNumber}</p>
        <p>{el.email}</p>
        <p>{el.street}</p>
        <p>{el.buildNumber}</p>
        <p>{el.apartmentNumber}</p>
        <p>{el.city}</p>
        <p>{el.country}</p>
        <br/>
    </div>;
}
