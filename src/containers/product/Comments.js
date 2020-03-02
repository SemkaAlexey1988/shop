import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reciveComments } from '../../actions/comments'
import { addNewComment } from '../../actions/comments'
import { wrapContainer } from '../../containers/wrap-containers';
import CommentsInfo from '../../components/product/CommentsInfo';
import CommentsForm from '../../components/product/CommentsForm';
import Error from '../../components/templates/error';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
    commentsInfo: [],
    isLoaded: true,
    error: false,
    nameInfo: '',
    messageInfo: '',
    buttonStatus: true,
    nameError: 'hidden',
    messageError: 'hidden',
    productId: 0 
    };
    this.sendForm = this.sendForm.bind(this);   
    this.changeNameValue = this.changeNameValue.bind(this);   
    this.changeMessageValue = this.changeMessageValue.bind(this); 
    this.blurNameValue = this.blurNameValue.bind(this);  
    this.blurMessageValue = this.blurMessageValue.bind(this);   
  }
  componentDidMount() {
    const { ApplicationService } = this.props;
    ApplicationService.getProduct(this.props.url).then((body) => {
    this.setState({
    productId: body[0].product_id   
    })      
    ApplicationService.getComments(body[0].product_id).then((data) => {
    this.props.reciveComments(data)   
    this.setState({
    isLoaded: false,
    commentsInfo: this.props.commentsContent   
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

  changeNameValue = (value) => {
    this.setState({
    nameInfo: value.name
    })    
    if(value.name !=='' && value.message !==''){
    this.setState({
    buttonStatus: false
    })
    }else{
    this.setState({
    buttonStatus: true
    })
    } 
    if(value.name !==''){ 
    this.setState({
    nameError: 'hidden'
    }) 
    }else{
    this.setState({
    nameError: 'show'
    })
    }  
  }  
  blurNameValue = (value) => {
    this.setState({
    nameInfo: value.name
    })    
    if(value.name !==''){
    this.setState({
    nameError: 'hidden'
    })
    }else{
    this.setState({
    nameError: 'show'
    })
    }               
  } 
  changeMessageValue = (value) => {
    this.setState({
    messageInfo: value.message
    })  
    if(value.name !=='' && value.message !==''){
    this.setState({
    buttonStatus: false
    })
    }else{
    this.setState({
    buttonStatus: true
    })
    } 
    if(value.message !==''){ 
    this.setState({
    messageError: 'hidden'
    }) 
    }else{
    this.setState({
    messageError: 'show'
    })
    }        
  } 
  blurMessageValue = (value) => {
    this.setState({
    messageInfo: value.message
    })  
    if(value.message !==''){
    this.setState({
    messageError: 'hidden'
    })
    }else{
    this.setState({
    messageError: 'show'
    })
    }                  
  }        
  sendForm = (value) => {
    let productId = this.state.productId
    const { ApplicationService } = this.props;           
    ApplicationService.sendComment(productId, value.name, value.message).then((data) => {     
    this.props.addNewComment(productId, value.name, value.message);     
    this.setState({
    commentsInfo: this.props.commentsContent,
    showMessage: 'show',
    nameInfo: '',
    messageInfo: '',
    buttonStatus: true
    });
    setTimeout(() => {
    this.setState({
    showMessage: 'hidden'
    });
    }, 4000);
    });     
  }
  render(){
    let { commentsInfo, isLoaded, showMessage, nameInfo, messageInfo, buttonStatus,
    nameError, messageError, error } = this.state; 
    let formData = {
    nameValue: this.changeNameValue,
    messageValue: this.changeMessageValue,
    nameBlur: this.blurNameValue,
    messageBlur: this.blurMessageValue,
    addComment: this.sendForm,
    showElement: showMessage,
    nameVal: nameInfo,
    messageVal: messageInfo,   
    sendButton: buttonStatus,
    nameError: nameError,
    messageError: messageError
    } 
    const successData = !(isLoaded || error);
    const errorBlock = error ? <Error/> : null 
    const loader = isLoaded ? <div className="load"></div> : null 
    const content = successData ? <CommentsInfo comments={commentsInfo} /> : null  
      
    return(
    <div className="comments">
    {errorBlock}   
    {loader}
    {content}
    <CommentsForm formValues={formData} />
    </div>
    )
  }
}

const mapStateProps = (state) => {
  return{
  commentsContent: state.commentsReducer
  } 
}
const mapDispatchProps = (dispatch) =>{  
  return {
  reciveComments: bindActionCreators (reciveComments, dispatch),
  addNewComment: bindActionCreators (addNewComment, dispatch)
  }
}
  
export default wrapContainer()(connect(mapStateProps, mapDispatchProps)(Comments))



