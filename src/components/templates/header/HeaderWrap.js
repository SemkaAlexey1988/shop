import React, { Component } from 'react'

import './Header.scss';

export default class HeaderWrap extends Component {

constructor(){
super();     
this.state = {
modalStatus: false    
} 

} 

showModal = () => {
this.setState((state) => {
return{    
modalStatus: !state.modalStatus 
} 
})     
}
closeModal = () => {   
this.setState((state) => {
return{    
modalStatus: !state.modalStatus 
} 
    })    
    }

componentDidMount() {
document.addEventListener('mousedown', this.controlClick, false);      
          }
componentWillUnmount(){
       document.removeEventListener('mousedown', this.controlClick, false);       
          }
controlClick = (e) => {
    if(this.state.modalStatus){
      if(this.formStatus.contains(e.target)){
          return;
      }
      this.setState((state) => {
          return{    
          modalStatus: !state.modalStatus 
          } 
          })
        }
          }    

    
 
    render(){

let { modalStatus } = this.state;        
        return(
         <div className="header-wrapper">

<div className="header-popup">
<button id="popup-1" className="popup" onClick={this.showModal.bind(this)}>Button</button>

<div className="modal-wrapper popup-1" style={{display: modalStatus ? 'block' : 'none'}}>
<div className="modal-table">
<div className="modal-table__cell">
<div ref={formStatus => this.formStatus = formStatus} className="modal-block">
<div className="close-modal" onClick={this.closeModal.bind(this)}>x</div>
<p>111</p>
</div>
</div>
</div>
</div>
</div>

         </div> 
        )     
    }    
}




