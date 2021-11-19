export const getGifs = async (cathegory) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${decodeURI(
		cathegory,
	)}&limit=10&api_key=gERh8NcTy1bYim6lZk9LahAQzKi3a9SO`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			image: img.images?.downsized_medium.url,
		};
	});
	return gifs;
};
