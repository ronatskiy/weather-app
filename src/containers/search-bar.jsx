import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };
		//this.onInputChange.bind(this)
	}

	onInputChange(event){
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:""});
	}

	render () {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input type="text"
					palceholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					onChange={this.onInputChange.bind(this)}
					value={this.state.term}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
