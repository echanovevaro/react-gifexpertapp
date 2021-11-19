import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGrip';

export const useFetchGifts = (cathegory) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(cathegory).then((imgs) => {
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 3000);
		});
	}, [cathegory]);

	return state;
};
