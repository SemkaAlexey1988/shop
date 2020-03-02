import React, { Component } from 'react'
import Parser from 'html-react-parser';



export default class ProductContent extends Component {

    render(){
      let productInfo = this.props.children;
  
return(<div className="product-content">
<p>{Parser(String(productInfo.content))}</p>
</div>

        )     
    }    

}




