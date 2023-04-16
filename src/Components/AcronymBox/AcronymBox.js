import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTrash } from 'react-icons/bs';

import "./AcronymBox.css"

function AcronymBox(props) {

    return (
        <div className="container">
            <Row className="acronym-row align-items-center">
                <Col className="col abbr-text-cont" xs={3}>
                    <p className="abbr">{props.abbr}</p>
                </Col>
                <Col className="col meaning-text-cont" xs={6}>
                    <p>{props.meaning}</p>
                </Col>
                <Col className="col delete-btn-cont">
                    <button className="delete-btn" onClick={props.handleDelete} id={props.id}><BsTrash className="trash-icon" /></button>
                </Col>
            </Row>
        </div >
    );
}

export default AcronymBox;

