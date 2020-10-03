import React from "react";

export function Question(props){
    return <form>
        <label>{props.label}</label>
        <input id={props.id} value={props.text} onChange={event => props.setText(event.currentTarget.value)}/>
    </form>
}