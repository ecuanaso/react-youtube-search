// this reads get react and pull off the property component and save it as Component
// its the same as const Component = React.Component;
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor (props ){
		// super is the method inside the Component
		super(props);
		
		// only in the constructor function can we declare state like this
		// where we use the equals operator to pass  a value into this.state
		this.state = { term: '' };
	}

	render(){

		
		// onChange is a react event 
		return ( 
			<div className="search-bar">
				<input 
				placeholder="Search..."
				value={ this.state.term }
				onChange={ event=> this.onInputChange(event.target.value) } />	
			</div>
		);
	}// this is the way we define a method in a class in react.

	onInputChange(term){
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;

