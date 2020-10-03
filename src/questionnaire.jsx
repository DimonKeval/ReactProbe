import React from "react";
import {Question} from "./Question";

export function Questionnaire() {
    return <div><Question label='Gender' id='gender'/>
        <Question label='Name' id='name'/>
        <Question label='Surname' id='surname'/>
        <Question label='Age' id='age'/>
        <Question label='Weidht' id='weight'/>
    </div>
}