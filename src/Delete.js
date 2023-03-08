import axios from "axios";
import react ,{useState}from "react";
import './App.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/deleteDetails/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
<div class="c">
                
                <div className="search" >
                <br></br>
                <br></br>
                <h2 d="dels">Delete Details</h2>
                    <input type="text" className='k'  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>
                    <button className="h" type="submit">Delete</button>
                    
                </div>
                
                 
            </div>      
        </></div>
  )
}

export default Delete