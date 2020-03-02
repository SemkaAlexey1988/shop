import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveRating } from '../../actions/rating'
import { wrapContainer } from '../../containers/wrap-containers';
import RatingInfo from '../../components/product/RatingInfo';
import Error from '../../components/templates/error';

class Rating extends Component {
  constructor() {
    super();
    this.state = {
    ratingInfo: [],
    isLoaded: true,
    error: false,
    productId: 0
    };
    this.getStarOne = this.getStarOne.bind(this); 
    this.getStarTwo = this.getStarTwo.bind(this); 
    this.getStarThree = this.getStarThree.bind(this); 
    this.getStarFour = this.getStarFour.bind(this); 
    this.getStarFive = this.getStarFive.bind(this);   
  }
  componentDidMount() {
    this.loadRating();
  }
  loadRating(){
    const { ApplicationService } = this.props;
    ApplicationService.getProduct(this.props.url).then((body) => {
    this.setState({
    productId: body[0].product_id   
    }) 
    ApplicationService.getRating(body[0].product_id).then((data) => {
    this.props.reciveRating(data[0]) 
    this.setState({
    isLoaded: false,
    ratingInfo: this.props.ratingContent   
    }) 
    }).catch(this.onError);
    });
  }

  onError = () => {
    this.setState({
    isLoaded: false,  
    error: true  
    }) 
  }

  updateRating = () => {
    const { ApplicationService } = this.props;
    ApplicationService.getProduct(this.props.url).then((body) => {
    ApplicationService.getRating(body[0].product_id).then((data) => {
    this.props.reciveRating(data[0]) 
    this.setState({
    isLoaded: true,
    ratingInfo: this.props.ratingContent   
    }) 
    this.loadRating();
    })
    });  
  }          
  addRatingInfo = (value) => {
    this.updateRating(); 
    let productId = this.state.productId   
    let storageValue = `ratingStatus-${productId}`; 
    let currentStorage = localStorage.getItem(storageValue);
    if(currentStorage != productId){
    const { ApplicationService } = this.props;   
    ApplicationService.addRating(productId, value).then((data) => {      
    localStorage.setItem(storageValue, productId);        
    });
    }
  }                  
  getStarOne = (value) => {
    this.addRatingInfo(value)
    }  
  getStarTwo = (value) => {
    this.addRatingInfo(value)
    } 
  getStarThree = (value) => {
    this.addRatingInfo(value)
    } 
  getStarFour = (value) => {
    this.addRatingInfo(value)
    } 
  getStarFive = (value) => { 
    this.addRatingInfo(value)
    }                           
  render(){
    let { ratingInfo, isLoaded, error } = this.state; 
    let ratingData = {
    starFirst:  this.getStarOne,
    starSecond:  this.getStarTwo,
    starThird:  this.getStarThree,
    starFourth:  this.getStarFour,
    starFifth:  this.getStarFive
    }
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <div className="load-rating"></div> : null 
    const content = successData ? <RatingInfo rating={ratingInfo} star={ratingData}  /> : null 
    return(
    <div className="rating">
    {errorBlock}   
    {loader}
    {content}
    </div>
    )
   
  }
}

const mapStateProps = (state) => {
  return{
  ratingContent: state.ratingReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
reciveRating: bindActionCreators (reciveRating, dispatch)
  }
}
  
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(Rating))



