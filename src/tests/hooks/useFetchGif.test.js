import { useFetchGif } from './../../hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests in useFetchGif', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGif('DBZ'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  
  test('should return an array of gifs and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGif('DBZ'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});