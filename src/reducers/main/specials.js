 import constants from '../../keymirror/index.js'



const initialState = [];
 

const specialsReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_SPECIALS){
    return state.innerHTML = action.specials
}	

return state

}

export default specialsReducer