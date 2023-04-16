import React, { useState, useEffect } from "react";
// import { Firestore } from "firebase/firestore";
// import { collection, getDocs } from "../../firebase_setup/config";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_setup/config";

import './AcronymDisplay.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AcronymDisplay(props) {

    const [acronyms, setAcronyms] = useState([]);

    const fetchAcronyms = async () => {
        const req = await getDocs(collection(db, "acronyms"));
        await req.forEach(async (doc) => {
            await setAcronyms(current => [...current, doc.data()]);
            console.log(doc.data());
            console.log(acronyms);
            // console.log(`${doc.id} => ${doc.data()}`);
        })
    }

    useEffect(() => {
        fetchAcronyms();
    }, []);

    return (
        <div>
            <h3>Acronyms:</h3>

            {acronyms.map((acronym, i) => {
                return (
                    <Row key={i}>
                        <Col>{acronym.abbr}</Col>
                        <Col>{acronym.meaning}</Col>
                    </Row>
                );
            })}
        </div>
    );

}

export default AcronymDisplay;