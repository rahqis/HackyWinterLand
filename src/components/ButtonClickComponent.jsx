import React from 'react';


import { useNavigate } from "react-router-dom";

function ButtonClick(){
    let navigate = useNavigate();

    return (
        <div class="buttons">
        <div class="divider"/>
        <button id="Animals" onClick={() => {navigate("/Create")}}>Animals</button>
        <div class="divider"/>
        <button id="Arts, Cultures, Humanities" onClick={() => {navigate("/Create")}}>Arts, Cultures, Humanities</button>
        <div class="divider" />
        <button id="Community Development" onClick={() => {navigate("/Create")}}>Community Development</button>
        <div class="divider"/>
        <button id="Education" onClick={() => {navigate("/Create")}}>Education</button>
        <div class="divider"/>
        <button id="Environment" onClick={() => {navigate("/Create")}}>Environment</button>
        <div class="divider"/>
        <button id="Health" onClick={() => {navigate("/Create")}}>Health</button>
        <div class="divider"/>
        <button id="Human Services" onClick={() => {navigate("/Create")}}>Human Services</button>
        <div class="divider"/>
        <button id="Human and Civil Rights" onClick={() => {navigate("/Create")}}>Human and Civil Rights</button>
        <div class="divider"/>
        <button id="International" onClick={() => {navigate("/Create")}}>International</button>
        <div class="divider"/>
        <button id="Religion" onClick={() => {navigate("/Create")}}>Religion</button>
        <div class="divider"/>
        <button id="Research and Public Policy" onClick={() => {navigate("/Create")}}>Research and Public Policy</button>
        <div class="divider"/>
        </div>
    )
}

export default ButtonClick;