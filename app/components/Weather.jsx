var React = require('react');

var openWeatherMap = require('openWeatherMap');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false
		};
	},

	handleSearch: function(location) {
		var self = this;

		this.setState({isLoading: true})
		openWeatherMap.getTemp(location).then(function(temp) {
			//success
			self.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			//error
			self.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
	},

	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if (isLoading){
				return <h3>Fetching Weather...</h3>;
			} else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			} else {
				
			}
		}

		return (
						
			<div>
				<h2>Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;