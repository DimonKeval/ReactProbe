import React from "react";
import {Question} from "./Question";
import {Link} from "react-router-dom";

export function Questionnaire(props) {
    let [name, setName] = React.useState('');
    let [lastname, setLastame] = React.useState('');
    let [pesel, setPesel] = React.useState('');
    let [phoneNumber, setPhoneNumber] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [street, setStreet] = React.useState('');
    let [buildNumber, setBuildNumber] = React.useState('');
    let [apartmentNumber, setApartmentNumber] = React.useState('');
    let [city, setCity] = React.useState('');
    let [country, setCountry] = React.useState('');

    return <div><Question label='name' id='name' text={name} setText={setName}/>
        <Question label='lastname' id='lastname' text={lastname} setText={setLastame}/>
        <Question label='pesel' id='pesel' text={pesel} setText={setPesel}/>
        <Question label='phoneNumber' id='phoneNumber' text={phoneNumber} setText={setPhoneNumber}/>
        <Question label='email' id='email' text={email} setText={setEmail}/>
        <Question label='street' id='street' text={street} setText={setStreet}/>
        <Question label='buildNumber' id='buildNumber' text={buildNumber} setText={setBuildNumber}/>
        <Question label='apartmentNumber' id='apartmentNumber' text={apartmentNumber} setText={setApartmentNumber}/>
        <Question label='city' id='city' text={city} setText={setCity}/>
        <Question label='country' id='country' text={country} setText={setCountry}/>
        <Link to={'/users'} onClick={() => {props.setArray([...props.users, {name: name, lastName: lastname, pesel: pesel, phoneNumber: phoneNumber, email: email, street: street, buildNumber: buildNumber, apartmentNumber: apartmentNumber, city: city, country: country}])}}>Create new one!:)</Link>
    </div>;
}