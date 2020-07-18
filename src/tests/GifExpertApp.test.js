import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp';
import '@testing-library/jest-dom'

describe('Tests in <GifExpertApp>', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show an array of gif´s categories', () => {
    const categories = ['Naruto', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
})
