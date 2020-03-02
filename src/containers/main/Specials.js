import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveSpecials } from '../../actions/specials.js'
import SpecialsInfo from '../../components/main/SpecialsInfo';
import Loader from '../../components/templates/loader';
import Error from '../../components/templates/error';
import { wrapContainer } from '../../containers/wrap-containers';

class Specials extends Component {

  constructor() {
    super();
    this.state = {
    specialsInfo: [],
    isLoaded: true,
    error: false
    };
  }

  onError = () => {
    this.setState({
    isLoaded: false,  
    error: true  
    }) 
  }
  componentDidMount() {
    const { ApplicationService } = this.props;
    ApplicationService.getSpecials().then((body) => {
    this.props.reciveSpecials(body)    
    this.setState({
    isLoaded: false,
    specialsInfo: this.props.specialsContent   
    }) 
    }).catch(this.onError);
  }	    
  render(){
    let { specialsInfo, isLoaded, error } = this.state; 
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <Loader/> : null 
    const content = successData ? <SpecialsInfo>{specialsInfo}</SpecialsInfo> : null  
    return(
    <div className="products-specials-wrap">
    {errorBlock} 
    {loader}  
    {content}
    </div>
          )       
  }    
}

const mapStateProps = (state) => {
  return{
  specialsContent: state.specialsReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveSpecials: bindActionCreators (reciveSpecials, dispatch)
  }
}
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(Specials))

