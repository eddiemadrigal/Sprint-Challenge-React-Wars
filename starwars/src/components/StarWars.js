import React, { useState, useEffect } from "react";
import Character from "./Character";
import axios from 'axios';
import "./StarWars.css";

function StarWars() {
    const [person, setPerson] = useState("1");

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/${person}/`)
            .then(response => {
                console.log(response.data);
                setPerson(response.data);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, []);

    return (
        <div>
            <button onClick={() => setPerson("2")}>Person 2</button>
            <button onClick={() => setPerson("3")}>Person 3</button>
            <div>
               <Character name={person.name} />;
             
            </div>
        </div>
    )
}

export default StarWars;