import React from 'react';

import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ cathegory }) => {
	const { data: images, loading } = useFetchGifts(cathegory);

	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>
				{cathegory}
			</h3>

			{loading && (
				<p className='animate__animated animate__flash'>
					Loading...
				</p>
			)}

			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
