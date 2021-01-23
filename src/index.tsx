import React from "react";
import ReactDom from "react-dom";
import { Hello } from './components/Hello';

ReactDom.render(
    <Hello compiler="Typescript" frameWork="React" />,
    document.getElementById('app')
);

