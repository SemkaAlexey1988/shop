import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';

import './ContactsInfo.scss';

export default class ContactsInfo extends Component {
  render(){
    let contactsInfo = this.props.contacts;
    let contactsTitle = this.props.renderTitle[0];
    return(
    <div>
    <MetaTags>
    <title>{contactsTitle}</title>
    <meta name="description" content={`${contactsTitle}. On this page you can find our contact details: phone, email`} />
    <meta property="og:title" content={contactsTitle} />
    <meta property="og:image" content="" />
    </MetaTags>
    {contactsInfo.map(contact => {
    return <div key={contact.id}><h2>
    {contact.title}</h2>
    <div className="contacts-block">
    <div className="contacts-block__left">
    <p>{contact.description}</p>
    <p><a href={"mailto:" + contact.email}><i aria-hidden="true" className="fa fa-envelope"></i>{contact.email}</a></p>
    <p><a href={"tel:" + contact.phone}><i aria-hidden="true" className="fa fa-phone"></i>{contact.phone}</a></p>
    <p><a target="_blank" rel="noopener noreferrer" href={contact.map_link}><i aria-hidden="true" className="fa fa-map-marker"></i>{contact.address}</a></p>
    </div>
    <div className="contacts-block__right"><div className="map">
    <iframe title="Google map" frameBorder="0" style={{ border: "0"}} width="100%" height="450" src={contact.map}></iframe>
    </div> 
    </div>
    </div>
    </div>
    })
    }
    </div>
    )     
  }    
}

