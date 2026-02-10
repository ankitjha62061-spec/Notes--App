import React, { useEffect, useState } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

const NotesApp = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		console.log(notes);
	}, [notes]);

	const handleNoteAdd = (newNote) => {
		notes.unshift(newNote);
		setNotes([...notes]);
	};

	const handleNoteDelete = (note) => {
		const noteId = note.id;
		const newNotes = notes.filter((note) => note.id !== noteId);
		setNotes(newNotes);
	};

	return (
		<div className='notes-app'>
			<h2 className='app-header'>Notes App</h2>
			<NoteEditor handleNoteAdd={handleNoteAdd} />
			<NotesGrid notes={notes} handleNoteDelete={handleNoteDelete} />
		</div>
	);
};

export default NotesApp;
