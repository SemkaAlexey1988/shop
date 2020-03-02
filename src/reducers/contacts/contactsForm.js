 import constants from '../../keymirror/index.js'



const initialState = [];
 

const contactsFormReducer = (state = initialState, action) => {
    if(action.type === constants.ADD_NEW_MESSAGE){
//let sendResult = 'Собшение успешно отправленно!'; 



return state.concat(action.payload);

}

return state

}




export default contactsFormReducer