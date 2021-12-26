import React from 'react';


import { useNavigate } from "react-router-dom";
import { NameForm } from './ZipCodeComponent';

function FunctionClick(){
    let navigate = useNavigate();

    return (
        <button class="homeButton" onClick ={() => {navigate("/home")}}>Home</button>
    )
}

export default FunctionClick;