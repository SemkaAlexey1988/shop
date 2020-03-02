import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveContacts } from '../../actions/contacts.js'
import ContactsInfo from '../../components/contacts/ContactsInfo';
import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';
import { wrapContainer } from '../../containers/wrap-containers';

class ContactsContent extends Component {
  constructor() {
    super();
    this.state = {
    contactsInfo: [],
    isLoaded: true,
    error: false
    };
  }

  componentDidMount() {
    const { ApplicationService } = this.props;
    ApplicationService.getContacts().then((body) => {
    this.props.reciveContacts(body)               
    this.setState({
    isLoaded: false,
    contactsInfo: this.props.contactsContent   
    }) 
    }).catch(this.onError);
       
/*
       fetch(`${eventsLink}/contacts`, {
       headers: { 'Content-Type': 'application/json'},
       method: 'GET',
       mode: 'cors'
       })
         .then(response => response.json())
         .then(json => { 

      this.props.reciveContacts(json)    
            
      // console.log(json);     
      
       this.setState({
         isLoaded: true,
         contactsInfo: this.props.contactsContent   
       }) 
       
      
           },
           (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }      
           
           )
*/
  }	
  
  onError = () => {
    this.setState({
    isLoaded: false,  
    error: true  
    }) 
  }
  
  render(){
  let { contactsInfo, isLoaded, error } = this.state;
  const successData = !(isLoaded || error);
  const errorBlock = error ? <Error/> : null 
  const loader = isLoaded ? <Loader/> : null 
  const content = successData ? <ContactsInfo contacts={contactsInfo} renderTitle={contactsInfo.map((data)=>{return data.title})}/> : null  
    return( 
    <div>
    {errorBlock}  
    {loader}
    {content}
    </div>
          )       
  }    

}

const mapStateProps = (state) => {
  return{
  contactsContent: state.contactsReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveContacts: bindActionCreators (reciveContacts, dispatch)
  }
}    
    
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(ContactsContent))