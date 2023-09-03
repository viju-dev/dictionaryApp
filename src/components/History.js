import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHistory,fetchWordDetails } from "../redux/actions/actions";
import { useEffect,useState } from "react";

const History = ({histData})=>{

    // const histData = useSelector((state) => state.history);
    const HistData = JSON.parse(localStorage.getItem('histData')) || [];
    let navigate = useNavigate();
    const dispatch = useDispatch();



    const handleHistory = (word)=>{
        navigate(`/${word}`);
            dispatch(fetchWordDetails(word));
            dispatch(addToHistory(word));          
          console.log("in",word);
    };

    //navigate(`/${word}`)
    return (
        <div className="historyContainer">
            <h2>Search History</h2>
            {
                HistData && 
                HistData.map((word,index)=>(
                    <p><a className="linkWord" href="" onClick={()=>handleHistory(word)}>{word}</a></p>
                ))
            }
        </div>
    )
}

export default History;