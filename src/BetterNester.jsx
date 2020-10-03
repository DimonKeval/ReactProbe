import React from "react";
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import {MyComponent} from "./MyComponent";
import {About} from "./About";

const users = [
    {
        name: 'Tom',
        lastName: 'Smith',
        pesel: '12345678901',
        phoneNumber: '+48123456789',
        email: 'emailfortest@email.email',
        street: 'StreetName',
        buildNumber: '123',
        apartmentNumber: '321',
        city: 'BigCity',
        country: 'NiceCountry'
    },
    {
        name: 'Alex',
        lastName: 'Joah',
        pesel: '47563489123',
        phoneNumber: '+48000333999',
        email: 'urecheabledestinatioin@email.email',
        street: 'Somewhere',
        buildNumber: '1',
        apartmentNumber: '9',
        city: 'FunnyPlace',
        country: 'Everywhere'
    },
    {
        name: 'Test',
        lastName: 'Testowy',
        pesel: '88334455032',
        phoneNumber: '+380067234567',
        email: 'sendmessage@email.email',
        street: 'CoolLine',
        buildNumber: '5',
        apartmentNumber: '7',
        city: 'BurgStadt',
        country: 'Wundershoenland'
    }
];

export function BetterNester() {
    const match = useRouteMatch();
    const [array, setArray] = React.useState(users);
    return <div>
        <Switch>

            <Route path={'/'} exact>
                <Link to={'/users'} exact>Show list of users</Link>
                <br/>
                <Link to={'/create'} exact>Create new user.</Link>
                <br/>
                <Link to={'/about'} exact>About</Link>
            </Route>

            <Route path={'/users'} exact>
                <MyComponent users={array} setArray={setArray}/>
                <br/>
                <Link to={'/'} exact>Go to home page.</Link>
            </Route>

            <Route path={'/about'}>
                <About/>
            </Route>

            <Route path={'/create'}>
                <Link to={'/'} exact>Go to home page.</Link>
                <br/>
                <MyComponent create={true} users={array} setArray={setArray}/>
            </Route>

            {/*<Route path={'/users/0'} exact><MyComponent id={0} users={array} setArray={setArray}/></Route>*/}

            {/*<Route path={'/users/1'} exact><MyComponent id={1} users={array} setArray={setArray}/></Route>*/}

            {/*<Route path={'/users/2'} exact><MyComponent id={2} users={array} setArray={setArray}/></Route>*/}

        </Switch>
    </div>;
}

