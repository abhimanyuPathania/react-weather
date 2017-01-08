var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function () {
		return {
			title: 'Error'
		}
	},

	componentDidMount: function () {

		// foundation calling open modal causes changes in dom which confilicts with react.
		var {title, message} = this.props;

		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reaveal="">
				<h4>{title}</h4>
				<p>{message}</p>

				<p>
					<button className="button hollow" data-close="">Okay</button>
				</p>
			</div>
		);

		// create string of modalMarkup
		var $modal = $(ReactDOMServer.renderToString(modalMarkup));

		// Add it to 'this' component by finding 'this' and using jquery's html method to inject markup
		// into the component
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($("#error-modal"));
		modal.open();
	},

	render: function() {
		return <div></div>;
	}
});

module.exports = ErrorModal;