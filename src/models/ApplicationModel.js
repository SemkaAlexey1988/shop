
export default class ApplicationModel {

  _modelContacts(data){
    return   {
      id: data.id,
      title: data.title,
      description: data.description,
      email: data.email,
      phone: data.phone,
      address: data.address,
      map: data.map,
      map_link: data.map_link,
      about_title: data.about_title,
      about_us: data.about_us 
      }
  } 
  
    _modelProduct(data){
      return   {
      product_id: data.product_id,
      name: data.name,
      sku: data.sku,
      quantity: data.quantity,
      status: data.status,
      image: data.image,
      category_id: data.category_id,
      manufacturer_id: data.manufacturer_id,
      price: data.price,
      content: data.content,
      description: data.description,
      special: data.special,
      date_added: data.date_added,
      date_modified: data.date_modified,
      url: data.url
      }
    }
  
    _modelComment(data){
      return   {
      comment_id: data.comment_id,
      product_id: data.product_id,
      author: data.author,
      message: data.message
      }
    } 
  
    _modelRating(data){
      return   {
      counter: data.counter,
      average: data.average
      }
    }    

}  