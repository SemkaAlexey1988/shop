 import constants from '../../keymirror/index.js'



const initialState = [];
 

const ratingReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_RATING){
    return state.innerHTML = action.rating
}	

return state

}

export default ratingReducer