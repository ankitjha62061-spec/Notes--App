import React from 'react';

const ColorPicker = ({ color, id }) => {
	return (
		<>
			<input type='radio' name='color-pick' value={color} id={id} />
			<label htmlFor={id} style={{ backgroundColor: color }}></label>
		</>
	);
};

export default ColorPicker;
