var axios = require('axios');

// api key
// bd5e378503939ddaee76f12ad7a97608

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=bd5e378503939ddaee76f12ad7a97608';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			// success
			if (res.data.cod && res.data.message){
				// edge case didn't work
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}

		}, function(res) {
			// error
			throw new Error(res.data.message);
		});
	}
}