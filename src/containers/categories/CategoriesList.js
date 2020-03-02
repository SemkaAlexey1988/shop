import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reciveCategoriesList } from '../../actions/categories'
import { wrapContainer } from '../../containers/wrap-containers';
import CategoriesListInfo from '../../components/categories/CategoriesListInfo';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      isLoaded: false
    };
  } 
  
  componentDidMount() { 
const { ApplicationService } = this.props;
ApplicationService.getCategoriesList().then((data) => {
    this.props.reciveCategoriesList(data)       
    this.setState({
      categoriesList: this.props.categoriesListContent,
      isLoaded: true   
    }) 
    }).catch((error)=> {
      console.log(error);
  });
  }

  render(){
let { categoriesList, isLoaded } = this.state; 
    if(isLoaded){
      return(
      <div>
      <CategoriesListInfo catListInfo={categoriesList} />
      </div>
        )
      }else{
        return(
        <div></div>
        )
      } 
}

}

const mapStateProps = (state) => {
  return{
  categoriesListContent: state.categoriesListReducer
  } 
  }
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveCategoriesList: bindActionCreators (reciveCategoriesList, dispatch)
  }
  } 
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(CategoriesList))





