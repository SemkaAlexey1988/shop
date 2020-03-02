 import constants from '../../keymirror/index.js'



const initialState = [];
 

const categoriesListReducer = (state = initialState, action) => {

if(action.type === constants.RECIVE_CATEGORIES_LIST){
    return state.innerHTML = action.categoriesList
}	

return state

}

export default categoriesListReducer