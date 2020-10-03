import React from "react";
import {Link, Route} from "react-router-dom";

export function About(props) {
    return <>
        <div className={'aboutPage'}>This site was created for learning how use React.js in wed development. <br/>
            I hope it's give me good experience, which can I use in future.
        </div>
        <br/>
        <Link to={'/'} exact className={'linkFromAbout'}>Go to home page.</Link></>;
}