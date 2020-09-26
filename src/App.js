import React from 'react';
import './App.css';
//import {MyComponent} from "./MyComponent";
import {Image} from "./Image";
import {IdentData} from "./IdentData";
import {TeleData} from "./TeleData";
import {AllData} from "./AllData";


function App() {
    return <>
        <Image source='imgforprobe.jpg' defaultName='some image'/>
        <IdentData name='Dmytro' lastName='Kovalskyi' pesel='12345678901'/>
        <TeleData phoneNumber='+48123456789'
                  email='emailfortest@email.email'
                  street='StreetName'
                  buildNumber='123'
                  apartmentNumber='321'
                  city='BigCity'
                  country='NiceCountry'/>
        <AllData name='Dmytro'
                 lastName='Kovalskyi'
                 pesel='12345678901'
                 phoneNumber='+48123456789'
                 email='emailfortest@email.email'
                 street='StreetName'
                 buildNumber='123'
                 apartmentNumber='321'
                 city='BigCity'
                 country='NiceCountry'/>
    </>;
}

export default App;
