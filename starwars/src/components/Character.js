import React from "react";
import {Card, CardHeader, CardBody, CardTitle, CardText, CardFooter} from "reactstrap";
import {Row, Col} from "reactstrap";
import "./Character.css"

const Character = props => {
    return(
        <div>
            <h1>Star Wars Character Profiles</h1>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardHeader>{props.name}</CardHeader>
                        <CardBody>
                            <CardTitle>Attributes:</CardTitle>
                            <CardText>
                                <ul>
                                    <li>Height: {props.height}</li>
                                    <li>Mass: {props.mass}</li>
                                    <li>Hair Color: {props.hair_color}</li>
                                    <li>Skin Color: {props.skin_color}</li>
                                </ul>
                            </CardText>
                        </CardBody>
                        <CardFooter>Homeworld: <a href={props.homeworld} target='_blank'>{props.homeworld}</a></CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Character;