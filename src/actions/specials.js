//import constants from '../keymirror/index.js'

import Api from '../api/api.js'

let apiInfo = new Api();
const eventsLink = apiInfo.eventsUrl; 



export const reciveSpecials = (specials) => {

    return {
   type: 'RECIVE_SPECIALS',
   specials 
   }       
   }	

   
  