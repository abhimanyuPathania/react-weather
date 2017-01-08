var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// aliases
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
// '!css' loader to load css and the '!style' loader to inject that css into HTML
require('style!css!foundation-sites/dist/foundation.min.css');
// run foundation
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="examples" component={Examples}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
);
