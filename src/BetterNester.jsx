import React from "react";
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import {MyComponent} from "./MyComponent";
import {About} from "./About";

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
                <About/>
            </Route>

            <Route path={'/users/0'} exact><MyComponent id={0}/></Route>

            <Route path={'/users/1'} exact><MyComponent id={1}/></Route>

            <Route path={'/users/2'} exact><MyComponent id={2}/></Route>

        </Switch>
    </div>;
}

