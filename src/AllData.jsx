import React from 'react';
import {IdentData} from "./IdentData";
import {TeleData} from "./TeleData";

export function AllData(props){
    return <>
        <br/>
        {/*<IdentData {...props}/>*/}
        {/*<TeleData {...props}/>*/}
        <IdentData name={props.name}
                   lastName={props.lastName}
                   pesel={props.pesel}/>

        <TeleData phoneNumber={props.phoneNumber}
            email={props.email}
            street={props.street}
            buildNumber={props.buildNumber}
            apartmentNumber={props.apartmentNumber}
            city={props.city}
            country={props.country}/>
            <br/>
    </>;
}