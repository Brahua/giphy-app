import { getGifs } from './../../helpers/GifHelper';

describe('Tests in <GifHelper>', () => {
  test('should get an array of 10 gifs', async () => {
    const gifs = await getGifs('Naruto');
    expect(gifs.length).toBe(10);
  });

  test('should get an array of 0 gifs ', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
})
