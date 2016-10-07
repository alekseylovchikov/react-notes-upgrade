var React = require('react');

require('./Note.css');

var Note = React.createClass({
	render() {
		var style = {
			backgroundColor: this.props.color
		};
		return (
			<div className="note" style={style}>
                <span className="delete" onClick={this.props.onDelete}>x</span>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Note;