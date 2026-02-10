import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

const COLORS = ['#F06292', '#BA68C8', '#FFD54F', '#4FC3F7', '#AED581'];

const NoteEditor = ({ handleNoteAdd }) => {
	const [text, setText] = useState('');
	const [color, setColor] = useState(COLORS[0]);

	const onNoteAdd = () => {
		if (!text) return;

		const newNote = {
			text,
			color,
			id: Date.now(),
		};

		handleNoteAdd(newNote);
		setText('');
	};

	return (
		<div className='note-editor'>
			<textarea
				placeholder='Enter your note here...'
				rows={5}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<div className='note-editor-footer'>
				<div
					className='color-picker'
					value={color}
					onChange={(e) => setColor(e.target.value)}
				>
					{COLORS?.map((color, index) => (
						<ColorPicker key={index} color={color} id={index} />
					))}
				</div>
				<button className='add-button' onClick={onNoteAdd}>
					Add
				</button>
			</div>
		</div>
	);
};

export default NoteEditor;
