import React, { Component } from 'react'

import ContactsContent from '../../containers/contacts/ContactsContent';
import ContactsFormMain from '../../containers/contacts/ContactsFormMain';
import TwoColumns from '../../components/templates/TwoColumns';
import BlocksManager from '../../components/templates/BlocksManager';

export default class Contactswrap extends Component {

  componentDidMount(){
  }

  render(){
    return( 
    <BlocksManager>  
    <TwoColumns left={<ContactsContent/>} right={<ContactsFormMain/>}/> 
    {/* <TwoColumns left={<ContactsFormMain/>} right={<ContactsContent/>}/> */}
    </BlocksManager> 
    )     
  }    
}

