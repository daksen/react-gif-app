import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/hello.gif';
    const wrapper = shallow(
        <GifGridItem 
            title={ title }
            url={ url }
        />
    );
    
    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un <p> con el título esperado', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la <img> con el src y el alt esperados', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
    
});
