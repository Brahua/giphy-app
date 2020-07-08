export const getGifs = async(category) => {
  try {
    const url = `//api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=N7ddKAzEDMvEXuW5lNJ4dzMsBB4is18p`;
    console.log(url)
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }));
    
    return gifs;

  } catch (error) {
    console.error('Ocurrió un error', error);
  }
} 