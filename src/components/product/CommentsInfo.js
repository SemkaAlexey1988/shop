import React, { Component } from 'react' 



export default class CommentsInfo extends Component {

    render(){
      let CommentInfo = this.props.comments;
return(<div className="product-comments">
    {CommentInfo.map(comments => {
        return <div key={comments.comment_id} className="product-comment">
<p className="product-comment__author">{comments.author}</p>
<p className="product-comment__message">{comments.message}</p>
  </div>
})
    }
</div>

        )     
    }    

}




