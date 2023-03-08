import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Get extends Component{
    state = {
        data:[]
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/get')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render(){
        return (
            <div className="getch">
              <center>
            <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Drama Name</th>
                <th>Released On</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.dname}</td>
                  <td>{user.yr}</td>
                  <td>{user.lang}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </center>
          </div>
          );
        }
}

export default Get;
