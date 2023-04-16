import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/config";

import "./AddAcronymPage.css"

import Button from 'react-bootstrap/Button';

function AddAcronymPage() {
    const [acronymDetails, setAcronymDetails] = useState({
        abbr: "",
        meaning: ""
    });

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/');
    }

    const handleChange = (e) => {
        e.persist();
        setAcronymDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.name === "abbr" ?
                e.target.value.toUpperCase() : e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        addDoc(collection(db, 'acronyms'), acronymDetails);
        navigate('/');
        e.preventDefault();
    }

    return (
        <div className="acronym-page-cont">
            <h1>New Acronym</h1>
            <form onSubmit={handleSubmit}>
                <input className="input-box top" type="text" placeholder="Enter Acronym" name='abbr' value={acronymDetails.abbr} onChange={handleChange} />

                <input className="input-box bottom" type="text" placeholder="Enter Definition" name='meaning' value={acronymDetails.meaning} onChange={handleChange} />

                <Button disabled={!acronymDetails.abbr.length || !acronymDetails.meaning.length} type='submit' className='btn btn-new' variant="outline-primary">New Acronym</Button>

                <Button className='btn btn-cancel' variant="outline-primary" onClick={navHome}>Cancel</Button>
            </form>
        </div >
    );
}

export default AddAcronymPage;