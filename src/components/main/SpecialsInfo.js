import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

import './SpecialsInfo.scss';

export default class SpecialsInfo extends Component {

  render(){
  let specialsInfo = this.props.children;
    return(
    <React.Fragment> 
    {specialsInfo.map(specials => {
    return <div key={specials.product_id} className="products-specials">
    <Link to={`/product/${specials.url}`}><img src={specials.image} alt={specials.name} /></Link>
    <Link to={`/product/${specials.url}`} className="products__name">{specials.name}</Link>
    <p>{specials.price}</p>
    <p>{specials.description}</p>
    <p>{specials.sku}</p>
    </div>
    })
    }
    </React.Fragment> 
         )     
  }    
}




