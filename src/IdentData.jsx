import React from 'react';

export function IdentData(props){
    return <>
        Name {props.name}<br/>
        Lastname {props.lastName}<br/>
        PESEL {props.pesel}<br/>
    </>;
}