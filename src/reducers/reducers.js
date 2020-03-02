import { combineReducers } from 'redux'

import categoriesListReducer from './category/categoriesList.js'
import contactsReducer from './contacts/contacts.js'
import contactsFormReducer from './contacts/contactsForm.js'
import specialsReducer from './main/specials.js'
import productReducer from './product/product.js'
import commentsReducer from './product/comments.js'
import ratingReducer from './product/rating.js'



const applicationReducer = combineReducers(
{
	categoriesListReducer,
	contactsReducer,
	contactsFormReducer,
	specialsReducer,
	productReducer,
	commentsReducer,
	ratingReducer
}
)


export default applicationReducer