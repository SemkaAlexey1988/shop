import React, { Component } from 'react'

import Product from '../../containers/product/Product';
import Comments from '../../containers/product/Comments';
import Rating from '../../containers/product/Rating';

import './Product.scss';


export default class ProductWrap extends Component {

    render(){
//console.log(this.props.history);
//console.log(this.props.match);
//console.log(this.props.location);
//this.props.history.push('/contacts');      



  
        return(
         <div className="product">
<div className="product-first">             
<Product url={this.props.match.params.id} template="1" />
</div>
<div className="product-second"> 
<Product url={this.props.match.params.id} template="2" />
<Rating url={this.props.match.params.id} /> 
<Comments url={this.props.match.params.id} />
</div>
         </div> 

        )     
    }    

}




