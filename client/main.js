import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Header from './components/header';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import {Bins} from '../imports/collections/bins';

const routes = (
	<Router>
		<div>
			<Header />
			<Route exact path='/' component={App}/>
			<Route path='/bins/:binId' component={BinsMain}/>
		</div>
	</Router>
	)

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.render-target'));
})