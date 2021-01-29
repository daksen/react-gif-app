import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import AddCategory from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });
    
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
