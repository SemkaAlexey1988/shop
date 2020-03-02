import React, { Component } from 'react'

import CategoriesList from '../../containers/categories/CategoriesList';
import './Categories.scss';

export default class CategoriesWrap extends Component {
  render(){
    return(
    <div className="category full-width flex-block">
    <div className="left-block">             
    <div className="categories-list">             
    <CategoriesList url={this.props.match.params.id} />
    </div>
    </div>
    <div className="content-block"> 
    </div>
    </div> 
        )     
  }    
}




