import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToHistory,fetchWordDetails } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import store from "../redux/store";
import History from "./History";

const Search = ()=> {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();


    
    const handleSearch = ()=>{
        if (searchTerm.trim() !== '') {
            navigate(`/${searchTerm}`);
            dispatch(fetchWordDetails(searchTerm));
            dispatch(addToHistory(searchTerm));
            setSearchTerm(''); // Clear the search input
            // console.log(searchTerm);
            const existingData = JSON.parse(localStorage.getItem('histData')) || [];
            // Add the new item (searchTerm) to the existing data
            existingData.push(searchTerm);

            // Store the updated data back in localStorage as a JSON string
            localStorage.setItem('histData', JSON.stringify(existingData));
          
          }
    };

    return (
        <div className="searchBar">
            <div className="searchArea">
                <input type="text" className="searchInput" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="button" className="searchBtn" value={"Search"}  onClick={()=>handleSearch()}/>
            </div>
            <Card/>
        </div>
    )
}

export default Search;