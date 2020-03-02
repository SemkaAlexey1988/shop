
export const reciveComments = (comments) => {

    return {
   type: 'RECIVE_COMMENTS',
   comments
   }       
   }
   
   export const addNewComment = (productId, author, message) => {

    let sendResult = {
        comment_id: 0,
        product_id: productId,
        author: author,
        message: message
       }  

    return {
   type: 'ADD_NEW_COMMENT',
   payload: sendResult
   }       
   }   

   
  