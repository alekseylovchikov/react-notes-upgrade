var React = require('react');

var Note = require('./Note.jsx');

var NotesGrid = React.createClass({
	componentDidMount() {
		this.msnry = new Masonry(this.refs.notesGrid, {
  			itemSelector: '.note',
			gutter: 10,
			isFitWidth: true
		});
	},

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

	render() {
        var onNoteDelete = this.props.onNoteDelete;
		return (
			<div className="notes-grid" ref="notesGrid">
				{this.props.notes.map(function(note) {
					return (
                        <Note
                            key={note.id}
                            color={note.color}
                            onDelete={onNoteDelete.bind(null, note)}
                        >
                            {note.text}
                        </Note>
                    );
				})}
			</div>
		);
	}
});

module.exports = NotesGrid;