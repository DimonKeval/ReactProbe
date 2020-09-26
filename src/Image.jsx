import React from 'react';

export function Image(props){
    return <img src={props.source} alt={props.defaultName} width="480" height="640"></img>;
        }