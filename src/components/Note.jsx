import React from 'react';

const Note = ({ color, onDelete, children }) => {
	return (
		<div className='note' style={{ backgroundColor: color }}>
			<span className='delete-note' onClick={onDelete}>
				x
			</span>
			{children}
		</div>
	);
};

export default Note;
