import React, { Component } from 'react'



export default class RatingInfo extends Component {
  constructor() {
    super();
  this.clickOne  = this.clickOne.bind(this);
  this.clickTwo  = this.clickTwo.bind(this);
  this.clickThree  = this.clickThree.bind(this);
  this.clickFour  = this.clickFour.bind(this);
  this.clickFive  = this.clickFive.bind(this);
} 

clickOne(){
  this.props.star.starFirst(this.starOne.value)
}
clickTwo(){
  this.props.star.starSecond(this.starTwo.value)
}
clickThree(){
  this.props.star.starThird(this.starThree.value)
}
clickFour(){
  this.props.star.starFourth(this.starFour.value)
}
clickFive(){
  this.props.star.starFifth(this.starFive.value)
}

    render(){
      let ratingInfo = this.props.rating;
      
let ratingAverage = ratingInfo.average  
let averageRating = ``; 
if(ratingAverage){
this.averageRating = `${parseFloat(ratingAverage.toFixed(1))} / 5`;  
}
return(<div className="rating-cart">


 <div className="rating-block rating-cart__stars">
  <input ref={(starFive) => this.starFive = starFive }  name="rating" value="5" id="rating-5" type="radio" />
  <label onClick={this.clickFive.bind(this)} htmlFor="rating-5" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
 
  <input ref={(starFour) => this.starFour = starFour } name="rating" value="4" id="rating-4" type="radio" />
  <label onClick={this.clickFour.bind(this)} htmlFor="rating-4" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
 
  <input ref={(starThree) => this.starThree = starThree } name="rating" value="3" id="rating-3" type="radio" />
  <label onClick={this.clickThree.bind(this)} htmlFor="rating-3" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
 
  <input ref={(starTwo) => this.starTwo = starTwo } name="rating" value="2" id="rating-2" type="radio" />
  <label onClick={this.clickTwo.bind(this)} htmlFor="rating-2" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
 
  <input ref={(starOne) => this.starOne = starOne } name="rating" value="1" id="rating-1" type="radio" />
  <label onClick={this.clickOne.bind(this)} htmlFor="rating-1" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
</div>
<p className="rating-cart__average">{this.averageRating}</p>
<p className="rating-cart__counter">({ratingInfo.counter} votes)</p>



</div>

        )     
    }    

}




