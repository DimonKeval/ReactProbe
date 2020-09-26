import React from 'react';

export function IdentData(props){
    return <p>
        Name {props.name}<br/>
        Lastname {props.lastName}<br/>
        PESEL {props.pesel}<br/>
    </p>;
}