var React = require('react');


var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built on React. I've built this for
			the Complete React Webapp Developer Course.</p>
			<p>Here are some of the tools that I used:</p>
			<ul>
				<li><a href="https://facebook.github.io/react">React</a> - This was
				he JavaScript framework used.</li>
				<li><a href="http://openweathermap.org">Open Weather Map</a> - API used to search
				weather data by city.</li>
			</ul>
		</div>
	);
};

module.exports = About;