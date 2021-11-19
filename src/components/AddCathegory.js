import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCathegory = ({ setCathegories }) => {
	const [inputValue, setInputValue] = useState('');

	const handlerInputchange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCathegories((caths) => [inputValue, ...caths]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={inputValue}
				onChange={handlerInputchange}
			/>
		</form>
	);
};

AddCathegory.propTypes = {
	setCathegories: PropTypes.func.isRequired,
};

export default AddCathegory;
