import React, { Component } from 'react'

// import ContactsContent from '../../../containers/contacts/ContactsContent';

import './BlocksManager.scss';

export default class BlocksManager extends Component {
  render(){
  // let bottom = <ContactsContent/>;  
  return(
  <div> 
  {
  React.Children.map(this.props.children, (child) => {
  return child; 
 /* return React.cloneElement(child, {bottom}, null); */ 
  })    
  } 
  </div>       

  )
  }    
}




