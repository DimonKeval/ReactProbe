import React from "react";
import {Redirect, useParams} from "react-router-dom";

export function Nested() {
    const params = useParams();

    React.useEffect(() => window.scrollTo(0, 0));

    const num = +params.id;

    if (isNaN(num)) {
        return <Redirect to='/'/>
    }

    return <>
        {params.id}
    </>;
}