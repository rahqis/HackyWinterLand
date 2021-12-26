import React from 'react';


import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function ButtonClick(){
    let [buttonid] = useState(0);
    let navigate = useNavigate();
    const onFinish = (event) =>{
        navigate("/Create")
        let id = event.target.id;
            // console.log(id)
        buttonid = id;
        console.log(buttonid)
        

    }

    return (
        <div class="banner">
        <div class="buttons">
        <div class="divider"/>
        <button class="singleButton" id="Animals" onClick={onFinish} Id={"Animals"}>Animals</button>
        <div class="divider"/>
        <button class="singleButton" id="Arts, Cultures, Humanities" onClick={onFinish} Id={"Arts, Cultures, Humanities"}>Arts, Cultures, Humanities</button>
        <div class="divider" />
        <button class="singleButton" id="Community Development" onClick={onFinish} Id={"Community Development"}>Community Development</button>
        <div class="divider"/>
        <button class="singleButton" id="Education" onClick={onFinish} Id={"Education"}>Education</button>
        <div class="divider"/>
        <button class="singleButton" id="Environment" onClick={onFinish} Id={"Environment"}>Environment</button>
        <div class="divider"/>
        <button class="singleButton" id="Health" onClick={onFinish} Id={"Health"}>Health</button>
        <div class="divider"/>
        <button class="singleButton" id="Human Services" onClick={onFinish} Id={"Human Services"}>Human Services</button>
        <div class="divider"/>
        <button class="singleButton" id="Human and Civil Rights" onClick={onFinish} Id={"Human and Civil Rights"}>Human and Civil Rights</button>
        <div class="divider"/>
        <button class="singleButton" id="International" onClick={onFinish} Id={"International"}>International</button>
        <div class="divider"/>
        <button class="singleButton" id="Religion" onClick={onFinish} Id={"Religion"}>Religion</button>
        <div class="divider"/>
        <button class="singleButton" id="Research and Public Policy" onClick={onFinish} Id={"Research and Public Policy"}>Research and Public Policy</button>
        <div class="divider"/>
        </div>
        </div>
    )
}

export default ButtonClick;