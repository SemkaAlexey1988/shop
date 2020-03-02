 import constants from '../../keymirror/index.js'



const initialState = [];
 

const productReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_PRODUCT){
    return state.innerHTML = action.product
}	

return state

}

export default productReducer