import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addNewMessage } from '../../actions/contacts.js'
import ContactsForm from '../../components/contacts/ContactsForm';
import { wrapContainer } from '../../containers/wrap-containers';

class ContactsFormMain extends Component {
  constructor() {
    super();
    this.state = {
      nameInfo: '',
      emailInfo: '',
      messageInfo: '',
      buttonStatus: true,
      nameError: 'hidden',
      emailError: 'hidden',
      emailErrorSecond: 'hidden',
      messageError: 'hidden',
      showMessage: 'hidden'
    };

    this.sendForm = this.sendForm.bind(this);   
    this.changeNameValue = this.changeNameValue.bind(this);  
    this.changeEmailValue = this.changeEmailValue.bind(this);  
    this.changeMessageValue = this.changeMessageValue.bind(this); 
    this.blurNameValue = this.blurNameValue.bind(this);  
    this.blurEmailValue = this.blurEmailValue.bind(this);  
    this.blurMessageValue = this.blurMessageValue.bind(this); 
  }
           
  changeNameValue = (value) => {
    this.setState({
      nameInfo: value.name
    })    
    if(value.name !=='' && value.email !=='' && value.message !==''){
    this.setState({
      buttonStatus: false
    })
    }else{
    this.setState({
      buttonStatus: true
    })
    }               
    if(value.name !==''){ 
    this.setState({
      nameError: 'hidden'
    }) 
    }else{
    this.setState({
      nameError: 'show'
    })
  }  
}  
  blurNameValue = (value) => {
    this.setState({
      nameInfo: value.name
    })    
    if(value.name !==''){
    this.setState({
      nameError: 'hidden'
    })
    }else{
    this.setState({
      nameError: 'show'
    })
  }       
} 
  changeEmailValue = (value) => { 
    this.setState({
    emailInfo: value.email
}) 
const patternEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;    
    if(patternEmail.test(value.email) == false){
    var corectEmail = false;
    }else{
    var corectEmail = true;
    } 
    if(value.name !=='' && value.email !=='' && value.message !=='' && corectEmail == true){
    this.setState({
    buttonStatus: false
    })
    }else{
    this.setState({
    buttonStatus: true
    })
    } 
    if(corectEmail == true){ 
    this.setState({
    emailError: 'hidden'
    }) 
    }else{
    this.setState({
    emailError: 'hidden'
    })
    }
    if(value.email !==''){ 
    this.setState({
    emailErrorSecond: 'hidden'
    }) 
    }else{
    this.setState({
    emailErrorSecond: 'show'
    })
    }        
  } 
  blurEmailValue = (value) => { 
    this.setState({
      emailInfo: value.email
    }) 
    const patternEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;    
    if(patternEmail.test(value.email) == false){
    var corectEmail = false;
    }else{
    var corectEmail = true;
    } 
    if(corectEmail == true){
    this.setState({
    emailError: 'hidden'
    })
    }else{
    this.setState({
    emailError: 'show'
    })
    }  
    if(value.email !==''){
    this.setState({
    emailErrorSecond: 'hidden'
    })
    }else{
    this.setState({
    emailErrorSecond: 'show'
    })
    }         
  } 
  changeMessageValue = (value) => {
    this.setState({
    messageInfo: value.message
    })  
    if(value.name !=='' && value.email !=='' && value.message !==''){
    this.setState({
    buttonStatus: false
    })
    }else{
    this.setState({
    buttonStatus: true
    })
    } 
    if(value.message !==''){ 
    this.setState({
    messageError: 'hidden'
    }) 
    }else{
    this.setState({
    messageError: 'show'
    })
    }        
  } 
  blurMessageValue = (value) => {
    this.setState({
    messageInfo: value.message
    })  
    if(value.message !==''){
    this.setState({
    messageError: 'hidden'
    })
    }else{
    this.setState({
    messageError: 'show'
    })
    }                  
  }   

  sendForm = (value) => {
    const { ApplicationService } = this.props;
    ApplicationService.sendQuestion(value.name, value.email, value.message).then((body) => {
    this.props.addNewMessage(value.name, value.email, value.message);
    this.setState({
      contactsForm: this.props.contactsContentForm,
      showMessage: 'show',
      nameInfo: '',
      emailInfo: '',
      buttonStatus: true,
      messageInfo: ''
    });
    setTimeout(() => {
    this.setState({
      showMessage: 'hidden'
    });
    }, 4000);
    }); 
  }  
  render(){
    let { showMessage, nameInfo, emailInfo, messageInfo, buttonStatus,
    nameError, emailError, emailErrorSecond, messageError  } = this.state;
    let formData = {
      nameValue: this.changeNameValue,
      emailValue: this.changeEmailValue,
      messageValue: this.changeMessageValue,
      nameBlur: this.blurNameValue,
      emailBlur: this.blurEmailValue,
      messageBlur: this.blurMessageValue,
      addQuestion: this.sendForm,
      showElement: showMessage,
      nameVal: nameInfo,
      emailVal: emailInfo,  
      messageVal: messageInfo,   
      sendButton: buttonStatus,
      nameError: nameError,
      emailError: emailError,  
      emailErrorSecond: emailErrorSecond,  
      messageError: messageError
} 
  return(
    <div>
    <ContactsForm formValues={formData} />
    </div>
    )     
  }    
}
const mapStateProps = (state) => {
  return{
  contactsContentForm: state.contactsFormReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  addNewMessage: bindActionCreators (addNewMessage, dispatch)
  }
}
    
    export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(ContactsFormMain))