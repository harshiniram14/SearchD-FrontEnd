import React from "react";
import './Home.css'
import { Link } from 'react-router-dom'
function First(){
    return(
        <div className = "one">
        <br></br>
        <a><Link to="/Page">
             <input id="crud" type="Submit" value="Click This"></input>
            </Link></a>
        </div>
    )
}
export default First