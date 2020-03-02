 import constants from '../../keymirror/index.js'



const initialState = [];
 

const contactsReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_CONTACTS){
    return state.innerHTML = action.contacts
}	

return state

}



export default contactsReducer