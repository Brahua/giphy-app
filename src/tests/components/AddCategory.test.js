import React from 'react';
import {shallow} from 'enzyme';
import AddCategory from './../../components/AddCategory'
import '@testing-library/jest-dom'

describe('Tests in <AddCategory>', () => {
  const setCategories = jest.fn();
  const component = <AddCategory setCategories={setCategories}></AddCategory>;
  let wrapper = shallow(component);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(component);
  });

  test('should create the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('should change search input text ', () => {
  //   const input = wrapper.find('input');
  //   input.simulate('change', { target: { value: ''}});
    
  // });

  test('should NOT post form information after submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  
  test('should post form information after submit', () => {
    //1. simular el inputChange
    wrapper.find('input').simulate('change', { target: { value: 'Prueba'}});
    //2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    //3. setCategories debe ser llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //4. se limpia el input
    expect(wrapper.find('input').prop('value')).toBe('');
  });


})
