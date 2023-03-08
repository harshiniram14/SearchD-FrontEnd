// import React,{ Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
        
     <div className="bimg">
        <br></br>
        <h1 id="h">Find Drama</h1>
        <br></br>
              <br></br>

            <a><Link to="/Page2">
             <input id="crud" type="Submit" value="Post"></input>
            </Link></a>
            @nbsp
            @nbsp

             <a><Link to="/Page3"> 
            <input id="crud" type="Submit" value="Put"></input>
              </Link></a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <a><Link to="/Page4">
            <input id="crud" type="Submit" value="Delete"></input>
            </Link></a>
            @nbsp
            @nbsp

            <a><Link to="/Page5">
            <input id="crud" type="Submit" value="Get"></input>
            </Link></a>
          
          </div>
    
    
  )
}

export default Home;