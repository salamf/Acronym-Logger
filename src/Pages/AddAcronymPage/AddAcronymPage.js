import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase_setup/config";

import "./AddAcronymPage.css"

import Button from 'react-bootstrap/Button';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

function AddAcronymPage() {
    /* Cannot add an acronym of greater than 10 characters (does not exist) */
    const maxAcronymLength = 10;

    /* Cannot add an definition of greater than 60 characters (does not exist) */
    const maxMeaningLength = 60;

    /* Used to store data entered into "new acronym" form */
    const [acronymDetails, setAcronymDetails] = useState({
        abbr: "",
        meaning: ""
    });

    /* Used to navigate back to home page if "cancel" is clicked */
    const navigate = useNavigate();
    const navHome = () => {
        navigate('/');
    }

    /* Update "acronymDetails" values based off of user inputs */
    const handleChange = (e) => {
        e.persist();
        setAcronymDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.name === "abbr" ?
                e.target.value.toUpperCase() : e.target.value
        }));
    }

    /* 
     * If submit is clicked, 
     * - Add "acronymDetails" object to db
     * - Navigate to homepage
     */
    const handleSubmit = async (e) => {
        addDoc(collection(db, 'acronyms'), acronymDetails);
        navigate('/');
        e.preventDefault();
    }

    return (
        <div className="main">
            <NavBar />
            <div className="acronym-page-cont">
                <h1>New Acronym</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input-box top" type="text" placeholder="Enter Acronym" name='abbr' value={acronymDetails.abbr} onChange={handleChange} maxLength={maxAcronymLength} />

                    <input className="input-box bottom" type="text" placeholder="Enter Definition" name='meaning' value={acronymDetails.meaning} onChange={handleChange} maxLength={maxMeaningLength} />

                    <Button disabled={!acronymDetails.abbr.length || !acronymDetails.meaning.length} type='submit' className='btn btn-new' variant="outline-primary">New Acronym</Button>

                    <Button className='btn btn-cancel' variant="outline-secondary" onClick={navHome}>Cancel</Button>
                </form>
            </div >
            <Footer />
        </div>
    );
}

export default AddAcronymPage;