import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHistory,fetchWordDetails } from "../redux/actions/actions";
import { useEffect,useState } from "react";

const History = ({setSearchTerm})=>{

    // const histData = useSelector((state) => state.history);
    const HistData = JSON.parse(localStorage.getItem('histData')) || [];
    let navigate = useNavigate();
    const dispatch = useDispatch();



    const handleHistory = (word)=>{    
                
            setSearchTerm(word);
            console.log("in1",word);
            navigate(`/`)
            // navigate(`/${word}`);
            // dispatch(fetchWordDetails(word));
            // dispatch(addToHistory(word));          
          console.log("in",word);
    };

    //navigate(`/${word}`)
    return (
        <div className="historyContainer">
            <h3>Search History</h3>
            <br/>
            {
                HistData && 
                HistData.map((word,index)=>(
                    <p><a className="linkWord" href="" onClick={(e)=>{e.preventDefault();handleHistory(word)}}>{word}</a></p>
                ))
            }
        </div>
    )
}

export default History;