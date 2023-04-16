import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, doc, deleteDoc, where } from "firebase/firestore";
import { db } from "../../firebase_setup/config";

import './LandingPage.css';

// import GovNavBar from "../../Components/GovNavBar/GovNavBar";
import NavBar from "../../Components/NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import AcronymBox from "../../Components/AcronymBox/AcronymBox";

function LandingPage() {
    const navigate = useNavigate();

    const [acronyms, setAcronyms] = useState([]);
    const [filteredAcronyms, setFilteredAcronyms] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [notFoundFlag, setNotFoundFlag] = useState(false);

    const fetchAcronyms = async () => {
        // const req = await getDocs(collection(db, "acronyms"), orderBy("abbr", "asc"));
        const req = await getDocs(query(collection(db, "acronyms"), orderBy("abbr", "asc")));
        await req.forEach(async (doc) => {
            await setAcronyms(current => [...current, doc.data()]);
            await setFilteredAcronyms(current => [...current, doc.data()]);
        })
    }

    useEffect(() => {
        setAcronyms([]);
        setFilteredAcronyms([]);

        fetchAcronyms();
        console.log(filteredAcronyms);

    }, []);

    const newAcronym = () => {
        navigate('new-acronym')
    }

    const handleSearchChange = (e) => {
        // e.preventDefault();
        setSearchInput(e.target.value.toUpperCase());

        if (e.target.value === '')
            setFilteredAcronyms(acronyms)
        // console.log(searchInput);
    }

    const handleSearch = () => {

        if (searchInput === '')
            setFilteredAcronyms(acronyms);

        else {

            const tempFilteredAcronyms = acronyms.filter(acronym => {
                return acronym.abbr === searchInput;
            }); // To avoid state not updating problem

            setFilteredAcronyms(tempFilteredAcronyms);

            if (!tempFilteredAcronyms.length) {
                setNotFoundFlag(true);
                return
            }
        }

        setNotFoundFlag(false);
    }

    const handleDelete = async (e, abbr) => {
        const q = await query(collection(db, "acronyms"), where("abbr", "==", abbr));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (acronym) => {
            // doc.data() is never undefined for query doc snapshots
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

                <h1>Welcome!</h1>

                <input className="input-box" placeholder='Search Acronyms' name="search" value={searchInput} onChange={handleSearchChange} />

                <Button className='btn btn-search' variant="outline-primary" onClick={handleSearch}>Search</Button>

                <Button className='btn btn-new' variant="outline-primary" onClick={newAcronym}>New Acronym</Button>

                <h3 className="acronym-header">Acronyms</h3>

                {notFoundFlag ? <p>Not Found Sir</p> : filteredAcronyms.map((acronym, i) => {
                    return <div>
                        <AcronymBox key={i} id={i} abbr={acronym.abbr} meaning={acronym.meaning} handleDelete={e => handleDelete(e, acronym.abbr)} />
                    </div>
                })}

                {/* <AcronymDisplay searchText={searchInput} /> */}
            </div>
        </div>
    );
}

export default LandingPage;