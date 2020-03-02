import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags' 

export default class ProductInfo extends Component {
  render(){
    let productInfo = this.props.product;
    let appUrl = this.props.urlApp;
    let productImage = productInfo.image;
    let image = productImage.substring(2, productImage.length) 
    return(<div className="product-cart">
    <MetaTags>
    <title>{`${productInfo.name} by online`}</title>
    <meta name="description" content={`${productInfo.name}: price, specifications, delivery`} />
    <meta property="og:title" content={`${productInfo.name} by online`} />
    <meta property="og:image" content={`${appUrl}/${image}`} />
    </MetaTags>
    <div className="product-cart__left">
    <img src={`../${productInfo.image}`} alt={productInfo.name} />
    </div>
    <div className="product-cart__right">
    <h2>{productInfo.name}</h2>
    <p><span>SKU: </span>{productInfo.sku}</p>
    <p>{productInfo.price} <span>USD</span></p>
    <p>{productInfo.description}</p>
    </div>
    </div>
         )     
    }    
}




