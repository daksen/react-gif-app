import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['1', '2', '3']
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);   
    });
    
});
