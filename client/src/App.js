import React, { Component } from 'react';
import helpers from './helpers';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			user: {},
			email: '',
			password: ''
		}
	}

	createUser = (e) => {
		e.preventDefault();
		
		helpers.createUser({
			email: this.state.email, 
			password: this.state.password})
			.then(user => {
				this.setState({user});
			});
	}

	handleChange = (e) => {
		let prop = e.target.name;
		this.setState({[prop]: e.target.value});
	}
	// Lifecycle hooks are just methods that run at different times in the component build process
	// componentDidMount() { // do something as soon as this component shows in the browser
		
	// }

  render() {
    return (
      <div>
        <h1>Loaded</h1>
        <form onSubmit={this.createUser}>
        	<input type="text" 
        		name="email" 
        		placeholder="Email" 
        		value={this.state.email} 
        		onChange={this.handleChange}/>
        	<input type="password" 
        		name="password" 
        		placeholder="Password" 
        		value={this.state.password} 
        		onChange={this.handleChange}/>
        	<button style={styles.button}>Submit</button>
        </form>
      </div>
    );
  }
}

let styles = {
	button: {
		backgroundColor: '#3ad843',
		color: '#fff',
		fontSize: '1.001rem'
	}
}

export default App;
