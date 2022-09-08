import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
//import { CounterApp } from "./CounterApp";
import './styles.css';

/* <HelloWorldApp/>
        <FirstApp title="My Title" subTitle="subTitle" propTest="mama"/>*/ 

ReactDOM.createRoot( document.getElementById('root') ) .render (
    <React.StrictMode>       
        {/*<CounterApp value={0} />*/}
        <FirstApp />
    </React.StrictMode>
);
