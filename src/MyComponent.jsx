import React from 'react';
import {Greeting} from "./Greeting";

export  function MyComponent(props){
    return <p>Hello {props.name}!
        <Greeting name={props.name}/>
        <Greeting{...props}/>
    </p>;
}
