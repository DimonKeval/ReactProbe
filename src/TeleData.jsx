import React from 'react';

export function TeleData(props){
    return <>
        phone number: {props.phoneNumber}<br/>
        email: {props.email}<br/>
        Street {props.street} {props.buildNumber}/{props.apartmentNumber}<br/>
        City {props.city}<br/>
        Country {props.country}
    </>;
}