import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 
import { render } from 'react-dom'

import './index.scss';
import App from './components/main';
import ContactsWrap from './components/contacts';
import ProductWrap from './components/product';
import CategoriesWrap from './components/categories';
import HeaderWrap from './components/templates/header';
// import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store/index.js'

import ApplicationService from './services/ApplicationService';
import { ApplicationServiceProvider} from './containers/application-service';

const appService = new ApplicationService();

render(

<Provider store={store}>	
<ApplicationServiceProvider value = {appService}>
<BrowserRouter>

<div className="site">
        <div className="content">
<header className="site-header">
	<div className="full-width">
<ul className="main-menu">
<li><Link to="/">Main</Link></li>
<li><Link to="/contacts">Contacts</Link></li>
<li><Link to="/product">Product</Link></li>
			</ul>
</div>
<HeaderWrap/>
</header>		
			<Switch>
 <Route exact path='/' component={App}/>
 <Route path='/contacts' component={ContactsWrap}/>
 <Route path='/product/:id' component={ProductWrap}/>
 <Route path='/:id' component={CategoriesWrap}/>
 {/* <Route path='/test' render={() => <h2>Test</h2>}/> */}
 </Switch>

 </div>
<footer className="site-footer">
<span>Copyright© 2018. All rights reserved.</span>
</footer>
</div>
	</BrowserRouter>
	</ApplicationServiceProvider>
	</Provider>
,
	document.getElementById('root')
);


