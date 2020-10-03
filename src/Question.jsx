import React from "react";

export function Question(props){
    return <form>
        <label>{props.label}</label>
        <input id={props.id}/>
    </form>
}