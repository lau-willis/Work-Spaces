import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Accounts from './accounts';

class Header extends Component{
	onBinClick(event){
		event.preventDefault();
		Meteor.call('bins.insert', (error, binId) => {
			//bin returns the id
			this.props.history.push(`/bins/${binId}`);
		});
	}
	render(){
		return (
			<nav className="nav navbar-default">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Markbin</Link>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Accounts />
					</li>
					<li>
						<a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
					</li>
				</ul>
			</nav>
			)
	}
}

export default withRouter(Header);