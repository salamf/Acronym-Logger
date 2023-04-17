import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, doc, deleteDoc, where } from "firebase/firestore";
import { db } from "../../firebase_setup/config";

import './LandingPage.css';

import NavBar from "../../Components/NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import AcronymBox from "../../Components/AcronymBox/AcronymBox";
import Footer from "../../Components/Footer/Footer";

function LandingPage() {
    /* Navigation object used to navigate to "newAcronym" page */
    const navigate = useNavigate();

    /* Original set of all stores acronyms in db */
    const [acronyms, setAcronyms] = useState([]);

    /* Set of search-filtered acronyms */
    const [filteredAcronyms, setFilteredAcronyms] = useState([]);

    /* To keep track of user search input */
    const [searchInput, setSearchInput] = useState('');

    /* 
     * Used to check if user search did not yield any results
     * - will diplay "not found message" if this variable is true 
     */
    const [notFoundFlag, setNotFoundFlag] = useState(false);

    /* 
     * Retreives all stored acronyms from db
     * - stores them in "acronyms" as an array of objects
     */
    const fetchAcronyms = async () => {
        const req = await getDocs(query(collection(db, "acronyms"), orderBy("abbr", "asc")));

        req.forEach(async (doc) => {
            setAcronyms(current => [...current, doc.data()]);
            setFilteredAcronyms(current => [...current, doc.data()]);
        })
    }

    /* 
     * Reset "acronyms" and "filteredAcronyms" array before retreiving from db to avoid stacking 
     * stacking is when db data keeps stacking onto the variables resulting in data repeation
     */
    useEffect(() => {
        setAcronyms([]);
        setFilteredAcronyms([]);

        fetchAcronyms();
    }, []);

    /* 
     * Called on click of "new acronym" button
     * - navigates to "newAcronym" page 
     */
    const newAcronym = () => {
        navigate('new-acronym')
    }

    /* 
     * Update search input as input is being entered into search field
     * - If search field is detected to be empty - display all acronyms
     * - Essentially, the 'filteredAcronyms' array is used to display acronyms
     *   and it is updated based off of the search input
     * - User does not need to click search again to clear his search
     * - If search input is detected empty at any given point, set NotFoundFlag to false
     */
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value.toUpperCase());

        if (e.target.value === '') {
            setFilteredAcronyms(acronyms);
            setNotFoundFlag(false);
        }
    }

    /* 
     * When the "search" button is clicked, 
     * - Update the filteredAcronyms array such that it contains only the acronyms that match the search
     * - if the search did not yeild anything, then set the NotFoundFlag to true
     */
    const handleSearch = () => {

        if (searchInput === '')
            setFilteredAcronyms(acronyms);

        else {

            const tempFilteredAcronyms = acronyms.filter(acronym => {
                return acronym.abbr === searchInput;
            });

            setFilteredAcronyms(tempFilteredAcronyms);

            if (!tempFilteredAcronyms.length) {
                setNotFoundFlag(true);
                return
            }
        }

        setNotFoundFlag(false);
    }

    /* Delete an acronym from db, then refetch the acronyms */
    const handleDelete = async (e, abbr) => {
        const q = query(collection(db, "acronyms"), where("abbr", "==", abbr));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (acronym) => {
            await deleteDoc(doc(db, "acronyms", acronym.id));
        });

        setAcronyms([]);
        setFilteredAcronyms([]);

        fetchAcronyms();
    }

    return (
        <div className='main'>
            <NavBar />

            <div className='landing-page-cont'>
                <div className="heading">
                    <h1>Welcome!</h1>

                    <input className="input-box" placeholder='Search Acronyms' name="search" value={searchInput} onChange={handleSearchChange} />

                    <Button className='btn btn-search' variant="outline-primary" onClick={handleSearch}>Search</Button>

                    <Button className='btn btn-new' variant="outline-secondary" onClick={newAcronym}>New Acronym</Button>
                </div>

                <h3 className="acronym-header">Acronyms</h3>

                {notFoundFlag ? <p>No Acronyms Found</p> : filteredAcronyms.map((acronym, i) => {
                    return <div key={i}>
                        <AcronymBox id={i} totLen={filteredAcronyms.length} abbr={acronym.abbr} meaning={acronym.meaning} handleDelete={e => handleDelete(e, acronym.abbr)} />
                    </div>
                })}
            </div>

            <Footer />
        </div>
    );
}

export default LandingPage;