import React from 'react';


import { useNavigate } from "react-router-dom";

function ButtonClick(){
    let navigate = useNavigate();

    return (
        <div class="buttons">
        <div class="divider"/>
        <button id="Animals" onClick={() => {navigate("/NameForm")}}>Animals</button>
        <div class="divider"/>
        <button id="Arts, Cultures, Humanities" onClick={() => {navigate("/NameForm")}}>Arts, Cultures, Humanities</button>
        <div class="divider"/>
        <button id="Community Development" onClick={() => {navigate("/NameForm")}}>Community Development</button>
        <div class="divider"/>
        <button id="Education" onClick={() => {navigate("/NameForm")}}>Education</button>
        <div class="divider"/>
        <button id="Environment" onClick={() => {navigate("/NameForm")}}>Environment</button>
        <div class="divider"/>
        <button id="Health" onClick={() => {navigate("/NameForm")}}>Health</button>
        <div class="divider"/>
        <button id="Human Services" onClick={() => {navigate("/NameForm")}}>Human Services</button>
        <div class="divider"/>
        <button id="Human and Civil Rights" onClick={() => {navigate("/NameForm")}}>Human and Civil Rights</button>
        <div class="divider"/>
        <button id="International" onClick={() => {navigate("/NameForm")}}>International</button>
        <div class="divider"/>
        <button id="Religion" onClick={() => {navigate("/NameForm")}}>Religion</button>
        <div class="divider"/>
        <button id="Research and Public Policy" onClick={() => {navigate("/NameForm")}}>Research and Public Policy</button>
        <div class="divider"/>
        </div>
    )
}

export default ButtonClick;

