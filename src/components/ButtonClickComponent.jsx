import React from 'react';


import { useNavigate } from "react-router-dom";

function ButtonClick(){
    let navigate = useNavigate();

    return (
        <div class="buttons">
        <div class="divider"/>
        <button class="singleButton" id="Animals" onClick={() => {navigate("/Create")}}>Animals</button>
        <div class="divider"/>
        <button class="singleButton" id="Arts, Cultures, Humanities" onClick={() => {navigate("/Create")}}>Arts, Cultures, Humanities</button>
        <div class="divider" />
        <button class="singleButton" id="Community Development" onClick={() => {navigate("/Create")}}>Community Development</button>
        <div class="divider"/>
        <button class="singleButton" id="Education" onClick={() => {navigate("/Create")}}>Education</button>
        <div class="divider"/>
        <button class="singleButton" id="Environment" onClick={() => {navigate("/Create")}}>Environment</button>
        <div class="divider"/>
        <button class="singleButton" id="Health" onClick={() => {navigate("/Create")}}>Health</button>
        <div class="divider"/>
        <button class="singleButton" id="Human Services" onClick={() => {navigate("/Create")}}>Human Services</button>
        <div class="divider"/>
        <button class="singleButton" id="Human and Civil Rights" onClick={() => {navigate("/Create")}}>Human and Civil Rights</button>
        <div class="divider"/>
        <button class="singleButton" id="International" onClick={() => {navigate("/Create")}}>International</button>
        <div class="divider"/>
        <button class="singleButton" id="Religion" onClick={() => {navigate("/Create")}}>Religion</button>
        <div class="divider"/>
        <button class="singleButton" id="Research and Public Policy" onClick={() => {navigate("/Create")}}>Research and Public Policy</button>
        <div class="divider"/>
        </div>
    )
}

export default ButtonClick;