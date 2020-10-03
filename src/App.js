import React from 'react';
import './App.css';
//import {MyComponent} from "./MyComponent";
import {Image} from "./Image";
import {IdentData} from "./IdentData";
import {TeleData} from "./TeleData";
import {AllData} from "./AllData";
import {CustomButton} from "./CustomButton";
import {MyComponent} from "./MyComponent";
import {Questionnaire} from "./questionnaire";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Nested} from "./Nested";


function App() {
    return <>
        <Questionnaire/>
        <Image source='/imgforprobe.jpg' defaultName='some image'/>
        {/*<IdentData name='Dmytro' lastName='Kovalskyi' pesel='12345678901'/>*/}
        {/*<TeleData phoneNumber='+48123456789'*/}
        {/*          email='emailfortest@email.email'*/}
        {/*          street='StreetName'*/}
        {/*          buildNumber='123'*/}
        {/*          apartmentNumber='321'*/}
        {/*          city='BigCity'*/}
        {/*          country='NiceCountry'/>*/}
        {/*<AllData name='Dmytro'*/}
        {/*         lastName='Kovalskyi'*/}
        {/*         pesel='12345678901'*/}
        {/*         phoneNumber='+48123456789'*/}
        {/*         email='emailfortest@email.email'*/}
        {/*         street='StreetName'*/}
        {/*         buildNumber='123'*/}
        {/*         apartmentNumber='321'*/}
        {/*         city='BigCity'*/}
        {/*         country='NiceCountry'/>*/}
        <MyComponent/>
        <Router>
            <Switch>
                <Route path='/test/:id' exact>
                    <Nested/>
                </Route>
                <Route path='/xyz'>
                    <div>xyz</div>
                </Route>
            </Switch>
            <br/>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                .map(el => <>
                        <Link to={`/test/${el}`}>test/{el}</Link>
                        <br/>
                    </>
                )}
        </Router>
        <CustomButton defaultLabel="Label on button"
                      start={1000}
                      reverse={false}
        />
    </>;
}

export default App;
