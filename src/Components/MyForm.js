import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: ""};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/xT4v_rx4T5kg", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div className='form-stuff'>
        <h3 htmlFor="name">First Name: </h3>
        <input type="text" id="name" name="name" onChange={this.handleFields} />

        <h3 htmlFor="surname">Last Name</h3>
        <input type="text" id="surname" name="surname" onChange={this.handleFields} />

        <h3 htmlFor="email">Email</h3>
        <input type="email" id="email" name="email" onChange={this.handleFields} />

        <h3 htmlFor="message">Your Message</h3>
        <textarea name="message" id="message" onChange={this.handleFields}></textarea>

        <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default MyForm;