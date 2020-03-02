import React, { Component } from 'react'

import './ContactsForm.scss';

export default class ContactsForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }
  changeName = (e) => {
    this.props.formValues.nameValue({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value}); 
  }
  blurName = (e) => {
    this.props.formValues.nameBlur({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});              
  }             
  changeEmail = (e) => {
    this.props.formValues.emailValue({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});  
  }             
  blurEmail = (e) => {
    this.props.formValues.emailBlur({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});             
  }            
  changeMessage = (e) => {
    this.props.formValues.messageValue({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});  
  }
  blurMessage = (e) => {
    this.props.formValues.messageBlur({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});             
  }              
  submitForm = (e) => {
    e.preventDefault();
    this.props.formValues.addQuestion({name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value});  
  }             
  render(){
    let showInfo = this.props.formValues.showElement;
    return(
    <div className="contacts-form">
    <h2>Contact form</h2>
    <p id="success-send" className={showInfo}>Message sended successfully</p>     
    <form onSubmit={this.submitForm.bind(this)}>
    <div className="form-group">
    <label>Name</label>
    <p className={`error-message ${this.props.formValues.nameError}`}>The name field must not be empty</p>
    <input ref={(inputName) => this.inputName = inputName } className="form-control" placeholder="name" onChange={this.changeName.bind(this)} 
    onBlur={this.blurName.bind(this)} type="text" value={this.props.formValues.nameVal}/>
    </div>
    <div className="form-group">
    <label>E-mail</label>
    <p className={`error-message ${this.props.formValues.emailError}`}>The e-mail field has an invalid format</p>
    <p className={`error-message ${this.props.formValues.emailErrorSecond}`}>The e-mail field must not be empty</p>
    <input ref={(inputEmail) => this.inputEmail = inputEmail } className="form-control" placeholder="Your e-mail" 
    onChange={this.changeEmail.bind(this)} onBlur={this.blurEmail.bind(this)}  type="text" value={this.props.formValues.emailVal}/>
    </div>
    <div className="form-group">
    <label>Message</label>
    <p className={`error-message ${this.props.formValues.messageError}`}>The message field must not be empty</p>
    <textarea ref={(inputMessage) => this.inputMessage = inputMessage } className="form-control" placeholder="Your message" 
    onChange={this.changeMessage.bind(this)} onBlur={this.blurMessage.bind(this)} type="text" value={this.props.formValues.messageVal}>
    </textarea>
    </div>
    <button className="btn btn-success" id="send-message" type="submit" disabled={this.props.formValues.sendButton} >Sеnd</button>
    </form>
    </div>
    )     
  }    
}

