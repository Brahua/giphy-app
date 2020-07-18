import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import GifGrid from './../../components/GifGrid'
import { useFetchGif } from './../../hooks/useFetchGif';
jest.mock('./../../hooks/useFetchGif');

describe('Tests in <GifGrid>', () => {
  const component = <GifGrid category={'DBZ'}></GifGrid>;


  test('should create the component correctly', () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show gifs information correctly', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    },
    {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa'
    }];

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(component);
    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
})
