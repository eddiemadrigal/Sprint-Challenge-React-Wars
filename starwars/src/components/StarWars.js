import React, { useState, useEffect } from "react";
import Character from "./Character";
import axios from 'axios';
import { Button } from "reactstrap";
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
    }, [person]);

    return (
        <div>
            <div>
                <Character name={person.name} height={person.height} mass={person.mass} hair_color={person.hair_color} skin_color={person.skin_color} homeworld={person.homeworld} />;
            </div>
            <div>
                <Button color="primary" onClick={() => setPerson("1")}>Luke Skywalker</Button>&nbsp;
                <Button color="primary" onClick={() => setPerson("2")}>C-3PO</Button>&nbsp;
                <Button color="primary" onClick={() => setPerson("3")}>R2-D2</Button>&nbsp;
                <Button color="primary" onClick={() => setPerson("4")}>Darth Vader</Button>&nbsp;
                <Button color="primary" onClick={() => setPerson("5")}>Leia Organa</Button>
            </div>
        </div>
    )
}

export default StarWars;