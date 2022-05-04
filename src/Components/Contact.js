import React, { Component } from 'react';
import MyForm from './MyForm';


class Contact extends Component {
  render() {
      return(
        <div className="Contact">
            <div className="contact-start">
                <h3> Fill out the form below to contact me! </h3>
                <h5> (Form handled with <a href="https://formcarry.com/" rel="noopener noreferrer" target='_blank' >formcarry.com</a>, check them out!) </h5>
            </div>
            <p> <MyForm /> </p>
        </div>
    )
  };
}


export default Contact;