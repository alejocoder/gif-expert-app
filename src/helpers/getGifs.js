export const getGifs = async(categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8tT0jP2iTiCISDK6OXHbAUbnN8lWfCAz&q=${categories}&limit=10`;
    const resp =await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map (img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
}));
    return gifs;
}