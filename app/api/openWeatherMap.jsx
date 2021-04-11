var axios = require('axios');

// api key
// f279d92cda12b5d3f2a28192aa387afe

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f279d92cda12b5d3f2a28192aa387afe';

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

		}, function(errRes) {
			// error
			throw new Error(errRes.response.data.message);
		});
	}
}