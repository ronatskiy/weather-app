import React, { Component } from "react";
import { connect } from "react-redux";

import { Sparklines, SparklinesLine } from "react-sparklines";
// import { bindActionCreators } from "redux";

class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp-273.15);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);

		console.log(temps);

		return (
			<tr
				key={cityName}
				//onClick={() => this.props.selectBook(book)}
				//className="list-group-item"
				>
				<td>{cityName}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red"/>
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={humidities}>
						<SparklinesLine color="green"/>
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={pressures}>
						<SparklinesLine color="blue"/>
					</Sparklines>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
//			<ul className="list-group col-sm-4">
//				{this.renderList()}
//			</ul>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ selectBook: selectBook }, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);
