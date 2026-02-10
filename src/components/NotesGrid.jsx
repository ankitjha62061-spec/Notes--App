import React, { useRef, useEffect } from 'react';
import Masonry from 'masonry-layout';
import Note from './Note';

const NotesGrid = ({ notes, handleNoteDelete }) => {
	const gridRef = useRef(null);
	const masonry = useRef(null);

	useEffect(() => {
		if (gridRef.current) {
			masonry.current = new Masonry(gridRef.current, {
				itemSelector: '.note',
				columnWidth: 200,
				gutter: 10,
				isFitWidth: true,
			});
		}
	}, []);

	useEffect(() => {
		masonry.current.reloadItems();
		masonry.current.layout();
	}, [notes]);

	return (
		<div className='notes-grid' ref={gridRef}>
			{notes.map((note) => (
				<Note
					key={note.id}
					onDelete={() => handleNoteDelete(note)}
					color={note.color}
				>
					{note.text}
				</Note>
			))}
		</div>
	);
};

export default NotesGrid;
