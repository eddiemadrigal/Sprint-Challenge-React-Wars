import React from "react";
import {Card, CardHeader, CardBody, CardTitle, CardFooter} from "reactstrap";
import {Row, Col} from "reactstrap";
import "./Character.css"



const Character = props => {
    return(
        <div>
            <h2>Star Wars Character Profiles</h2>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardHeader>{props.name}</CardHeader>
                        <CardBody>
                            <CardTitle>Attributes:</CardTitle>
                                <div>
                                    <ul>
                                        <li>Height: {props.height}</li>
                                        <li>Mass: {props.mass}</li>
                                        <li>Hair Color: {props.hair_color}</li>
                                        <li>Skin Color: {props.skin_color}</li>
                                    </ul>
                                </div>
                        </CardBody>
                        <CardFooter>Homeworld: <a href={props.homeworld}>{props.homeworld}</a></CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Character;