import React from 'react';
import './style.css';

export default class Form extends React.Component {
  state = {
    Name: '',
    Email: '',
    Number: '',
    Role: '',
    dataBase: []
  };

  showData = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitData = e => {
    e.preventDefault();
    this.setState({
      dataBase: [
        ...this.state.dataBase,
        this.state.Name,
        this.state.Email,
        this.state.Number,
        this.state.Role
      ]
    });
  };

  componentDidUpdate() {
    localStorage.setItem('user', JSON.stringify(this.state.dataBase));
  }
  componentDidMount() {
    let db = JSON.parse(localStorage.getItem('user'));
    if (db) {
      this.setState({
        dataBase: db
      });
    }
  }

  render() {
    return (
      <>
        <form className="main_container">
          <p style={{ textTransform: 'uppercase' }}>Developer Information</p>
          <input
            onChange={this.showData}
            type="text"
            name="Name"
            value={this.state.Name}
            placeholder="enter your name"
          />
          <p>{this.state.Name}</p>
          <input
            onChange={this.showData}
            type="email"
            name="Email"
            value={this.state.Email}
            placeholder="enter your  email"
          />
          <p>{this.state.Email}</p>
          <input
            onChange={this.showData}
            type="number"
            name="Number"
            value={this.state.Number}
            placeholder="enter your number"
          />
          <p>{this.state.Number}</p>
          <input
            placeholder=" enter your role"
            onChange={this.showData}
            type="text"
            name="Role"
            value={this.state.Role}
          />
          <p>{this.state.Role}</p>
          <button onClick={this.submitData}>submit</button>
          <h4>User Data List</h4>
          {this.state.dataBase.map((item, idx) => (
            <div key={idx} className="userData">
              <p>{item}</p>
            </div>
          ))}
        </form>
      </>
    );
  }
}
