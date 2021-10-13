const getGifs = async ({queryTerm}) => {
    const api_key = 'JwNObylQhgbTPvgfdsk96Lm0HMZ4q02F';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(queryTerm)}&api_key=${api_key}`);
    const { data } = await response.json();
    const images = data.map(({ id, title, images: { downsized_large: { height, width, url }} }) => {
        return { idImage: id, titleImage: title, urlImage: url, height, width }
    })
    return images
}

export default getGifs