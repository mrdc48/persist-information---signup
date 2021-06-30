import React from 'react';
import './style.css';

export default class Form extends React.Component {
  state = {
    Name: '',
    Email: '',
    Number: '',
    Role: ''
  };

  showData = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitData = e => {
    e.preventDefault();
    localStorage.setItem('data', JSON.stringify(this.state));
    console.log('your information has been saved');
  };
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
        </form>
      </>
    );
  }
}
