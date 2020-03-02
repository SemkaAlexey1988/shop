 import constants from '../../keymirror/index.js'



const initialState = [];
 

const commentsReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_COMMENTS){
    return state.innerHTML = action.comments
}	

if(action.type === constants.ADD_NEW_COMMENT){
    return state.concat(action.payload);
    
    }

return state

}

export default commentsReducer