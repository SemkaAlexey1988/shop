import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

export default class CategoriesListInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentId: 0
    };
  }  
  toggleClick = (id) => { 
    this.setState({ 
    currentId: id
    });
  }
  render(){
    let CategoriesListInfo = this.props.catListInfo;
    const { currentId } = this.state;
    return(<ul className="categories-menu">
    {CategoriesListInfo.map(category => {
    if(category.child[0]){
    return <li key={category.id}>
    <Link to={`/${category.link}`}>{category.title}</Link>
    <span className={currentId === category.id  ? 'toggle-button show' : 'toggle-button' } onClick={this.toggleClick.bind(this, category.id)}></span>
    <ul className={currentId === category.id  ? 'sub-menu show' : 'sub-menu' }>
    {category.child.map(categoryChild => { 
    return <li key={categoryChild.id}>
    <Link to={`/${categoryChild.link}`}>{categoryChild.title}</Link>
    </li>
    })  
    }
    </ul> 
    </li>
    }else{
    return <li key={category.id}>
    <Link to={`/${category.link}`}>{category.title}</Link>
    </li>    
    }
    })
    }
    </ul>
    )     
  }    
}




