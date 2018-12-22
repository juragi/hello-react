import React, {Component} from 'react';

class Counter extends Component {
	state = {
		number: 0,
		foo: {
			bar: 0,
			foobar: 1
		}
	}

	constructor(props){
		super(props);
		console.log('constructor');
	}

	componentDidMount(){
		console.log('componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		if(nextState.number % 5 === 0) return false;
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate');
	}

	componentDidUpdate(prevProps, prevState){
		console.log('componentDidUpdate');
	}

	handleIncrease = () => {
		this.setState({
			number: this.state.number + 1
		});
		/* const {number} = this.state;
		this.setState({
			number: number + 1
		}); */
	}

	handleDecrease = () => {
		/* this.setState({
			number: this.state.number - 1
		}); */
		this.setState(
			({number}) => ({
				number: number - 1
			})
		)
	}

	render(){
		return (
			<div>
				<h1>counter</h1>
				<div>value: {this.state.number}</div>
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		)
	}
}

export default Counter;