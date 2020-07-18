import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from './../../components/GifGridItem';


describe('Tests in <GifGridItem>', () => {
  const gif = {
    id: 'ffsjFDSKBFs456',
    title: 'Title',
    url: 'http://localhost:4200'
  }
  const component = <GifGridItem key={gif.id} {...gif}/>;
  
  let wrapper = shallow(component);

  beforeEach( () => {
    wrapper = shallow(component)
  })


  test('should create the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should show the title of gif', () => {
    const h5 = wrapper.find('h5');
    expect(h5.text().trim()).toBe(gif.title);
  });

  test('should show the img props (src, alt) correctly', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(gif.url);
    expect(img.prop('alt')).toBe(gif.title);
  });

  test('should show animation effect', () => {
    const div = wrapper.find('div')
    const className = (div.getElements()[0]).props.className
    expect(className).toContain('animate__animated animate__bounceIn');
  });
  
})
