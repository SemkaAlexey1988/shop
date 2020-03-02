//import constants from '../keymirror/index.js'

import Api from '../api/api.js'

let apiInfo = new Api();
const eventsLink = apiInfo.eventsUrl; 



export const reciveContacts = (contacts) => {

    return {
   type: 'RECIVE_CONTACTS',
   contacts 
   }       
   }	

   
   export const addNewMessage = (userName, userEmail, userMessage) => {

    let sendResult = {
      name: userName,
      email: userEmail,
      message: userMessage
     } 



          return {
            type: 'ADD_NEW_MESSAGE',
            payload: sendResult
            } 
    }   