import React from "react";
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import {MyComponent} from "./MyComponent";

export function BetterNester() {
    const match = useRouteMatch();

    return <div>
        <Switch>

            <Route path={'/'} exact>
                <Link to={'/users'} exact>Show list of users</Link>
                <br/>
                <Link to={'/about'} exact>About</Link>
            </Route>

            <Route path={'/users'} exact>
                <MyComponent/>
                <br/>
                <Link to={'/'} exact>Go to home page.</Link>
            </Route>

            <Route path={'/about'}>
                <div>This site was created for learning how use React.js in wed development. <br/>
                    I hope it's give me good experience, which can I use in future.
                </div>
                <br/>
                <Link to={'/'} exact>Go to home page.</Link>
            </Route>

            <Route path={'/tom'} exact><MyComponent id={0}/></Route>

            <Route path={'/alex'} exact><MyComponent id={1}/></Route>

            <Route path={'/test'} exact><MyComponent id={2}/></Route>

        </Switch>
    </div>;
}

