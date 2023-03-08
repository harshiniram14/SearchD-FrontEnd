import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            dname:"",
            yr:"",
            lang:""
        };
    }

    handleIdChange=(event)=>{
        this.setState({id:event.target.value});
    };
    handleNameChange=(event)=>{
        this.setState({dname:event.target.value});
    };
    handleYearChange=(event)=>{
        this.setState({yr:event.target.value});
    };
    handleLangChange=(event)=>{
        this.setState({lang:event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            dname: this.state.dname,
            yr: this.state.yr,
            lang: this.state.lang,
            
          };
        
          axios.put('http://127.0.0.1:8080/updateDetails', data)
};

render(){
    return(
        <div className="App">
	<header className="App-header2">
	<form onSubmit={this.handleSubmit}>
	<h2> Put Details </h2>		
    <label >
		ID:
		</label><br/>
		<input type="integer" value={this.state.id} required onChange={this.handleIdChange} /><br/>

        <label>
        Name:
		</label><br/>
		<input type="text" value={this.state.dname} required onChange={this.handleNameChange} /><br/>
        
		<label>
		Year:
		</label><br/>
		<input type="integer" value={this.state.yr} required onChange={this.handleYearChange} /><br/>
		
		<label>
		Language:
		</label><br/>
		<input type="text" value={this.state.lang} required onChange={this.handleLangChange} /><br/>
			
		<button type="submit">Submit</button>
	</form>
	</header>
	</div>
    );
}
}

export default Form;
