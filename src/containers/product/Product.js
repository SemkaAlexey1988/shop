import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveProduct } from '../../actions/product.js'
import { wrapContainer } from '../../containers/wrap-containers';
import ProductInfo from '../../components/product/ProductInfo';
import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';
import ProductContent from '../../components/product/ProductContent';

class Product extends Component {
  constructor() {
    super();
    this.state = {
    productInfo: [],
    isLoaded: true,
    error: false,
    applicationUrl: ''
    };

  }
  componentDidMount() { 
    const { ApplicationService } = this.props;
    ApplicationService.getProduct(this.props.url).then((body) => {
    this.props.reciveProduct(body)    
    this.setState({
    isLoaded: false,
    productInfo: this.props.productContent[0]   
    }) 
    }).catch(this.onError);

    const appUrl = ApplicationService.getApplicationUrl();
    this.setState({
    applicationUrl: appUrl
    })      
  }

  onError = () => {
    this.setState({
    isLoaded: false,  
    error: true  
    }) 
  }

  render(){
    let { productInfo, isLoaded, error, applicationUrl } = this.state; 
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <Loader/> : null 
    const content = (successData && this.props.template === "1")  ? <ProductInfo product={productInfo} urlApp={applicationUrl} /> : 
    (successData && this.props.template === "2") ? <ProductContent>{productInfo}</ProductContent>  : null;  
    return(
    <React.Fragment>   
    {errorBlock}   
    {loader}  
    {content}
    </React.Fragment> 
    )

  }
}

const mapStateProps = (state) => {
  return{
  productContent: state.productReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveProduct: bindActionCreators (reciveProduct, dispatch)
  }
}
  
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(Product))



