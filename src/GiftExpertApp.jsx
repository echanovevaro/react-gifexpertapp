import React from 'react';
import { useState } from 'react';
import AddCathegory from './components/AddCathegory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
	const [cathegories, setCathegories] = useState([
		'Rick & Morty',
	]);
	// const handleAdd = () => {
	// 	setCathegories((caths) => [...caths, 'South Park']);
	// };

	return (
		<>
			<h2>GiftExpertApp</h2>
			<AddCathegory setCathegories={setCathegories} />

			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{cathegories.map((cathegory) => (
					<GifGrid key={cathegory} cathegory={cathegory} />
				))}
			</ol>
		</>
	);
};
export default GiftExpertApp;
