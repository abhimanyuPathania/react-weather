var React = require('react');


var WeatherMessage = ({temp, location}) => {

	return (
		<h3 className="text-center">
			It's {temp}&deg;C in <span className="weather-message-location">{location}</span>.
		</h3>
	);
}

module.exports = WeatherMessage;