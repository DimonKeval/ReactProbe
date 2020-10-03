import React from "react";
import {Redirect, useParams} from "react-router-dom";

export function Nested(){
    const params = useParams();

    const num = +params.id;

    if (isNaN(num)){
        return <Redirect to='/'/>
    }

    return <>
        {params.id}
        </>;
}