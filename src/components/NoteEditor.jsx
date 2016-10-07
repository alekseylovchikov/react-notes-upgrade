var React = require('react');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
	getInitialState() {
	    return {
	        text: ''  
	    };
	},

    handleChange() {
        this.setState({
            text: this.refs.noteText.value
        });
    },

    handleNoteAdd() {
        let colors = ['#16a085', '#27ae60', '#2980b9', '#2c3e50', '#f39c12'];
        let randomColor = colors[Math.floor((Math.random() * colors.length - 1) + 1)];
        var newNote = {
            text: this.state.text,
            color: randomColor,
            id: Date.now()
        };

        if (this.state.text !== '') {
            this.props.onNoteAdd(newNote);
            this.setState({
                text: ''
            });
        }
    },

	render() {
		return (
			<div className="note-editor">
				<textarea
					placeholder="Enter your note..."
                    rows={5}
                    ref="noteText"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
				<button className="add-btn" onClick={this.handleNoteAdd}>ADD</button>
			</div>
		);
	}
});

module.exports = NoteEditor;