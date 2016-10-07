var React = require('react');

var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./NotesApp.css');

var NotesApp = React.createClass({
	getInitialState() {
	    return {
	        notes: []
	    };
	},

    componentDidMount() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));

        if (localNotes) {
            this.setState({
                notes: localNotes
            });
        }
    },

    componentDidUpdate() {
        this._updateLocalStorage();
    },

    handleDeleteNote(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter((el) => {
            return el.id !== noteId;
        });
        this.setState({
            notes: newNotes
        });
    },

    handleAddNote(note) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(note);
        this.setState({
            notes: newNotes
        });
    },

	render() {
		return (
			<div className="notes-app">
				<NoteEditor onNoteAdd={this.handleAddNote} />
				<NotesGrid notes={this.state.notes} onNoteDelete={this.handleDeleteNote} />
			</div>
		);
	},

    _updateLocalStorage() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = NotesApp;