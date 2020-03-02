import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import './App.scss';
import Specials from '../../containers/main/Specials';

export default class App extends Component {
  render(){
    return(
    <div>  
    <MetaTags>
    <title>Online store of household appliances</title>
    <meta name="description" content="Online store of household appliances: phones, laptops, computers, cameras." />
    <meta property="og:title" content="Online store of household appliances" />
    <meta property="og:image" content="" />
    </MetaTags>  
    <h1>Main page</h1>
    <Specials />
    </div>
          )     
  }    
}
