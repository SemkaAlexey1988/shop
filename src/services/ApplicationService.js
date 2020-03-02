import Api from '../api/api.js'
import ApplicationModel from '../models/ApplicationModel.js'

let apiInfo = new Api();
const shopLink = apiInfo._shopUrl; 
const applicationLink = apiInfo._applicationUrl; 

export default class ApplicationService extends ApplicationModel  {

async getResource(url){
  const res = await fetch(`${shopLink}${url}`); 
if(!res.ok){
  throw new Error(res.status)
}
return await res.json();
}

  async getContacts(){
    const resContacts = await this.getResource(`/contacts`);
    return resContacts.map(super._modelContacts);  
  }
  async getSpecials(){
    const resSpecials = await this.getResource(`/specials`);
    return resSpecials.map(super._modelProduct); 
  } 
  async getProduct(id){
    const resProduct = await this.getResource(`/product/${id}`);
    return resProduct.map(super._modelProduct);
  }          
  async getComments(id){
    const resComments = await this.getResource(`/comments/${id}`);
    return resComments.map(super._modelComment);
              }  
  async getRating(id){
    const resRating = await this.getResource(`/rating/${id}`);
    return resRating.map(super._modelRating); 
  } 
  async getCategoriesList(){
    const resCategoriesList = await this.getResource(`/categories`);
    return resCategoriesList
                }  
  getApplicationUrl(){
    return applicationLink
  }              

sendQuestion(userName, userEmail, userMessage){
  return fetch(`${shopLink}/questions/`, {
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
    method: 'POST',
     body: JSON.stringify({
          "userName": userName,
          "userEmail": userEmail,
          "userMessage": userMessage
        }), 
    mode: 'cors'
    })
      .then(response => response)
      .then(json => { 
        })  
      }
sendComment(product_id, author, message){
        return fetch(`${shopLink}/comment/`, {
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
          method: 'POST',  
           body: JSON.stringify({
                "product_id": product_id,
                "author": author,
                "message": message
              }),    
          mode: 'cors'      
          })
            .then(response => response)
            .then(json => {  
              })  
            } 
            
addRating(product_id, rating){
        return fetch(`${shopLink}/ratings/`, {
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
          method: 'POST',      
           body: JSON.stringify({
                "product_id": product_id,
                "rating": rating
              }),    
            mode: 'cors'
              })
                .then(response => response)
                .then(json => { 
                    })  
                  }   

}


