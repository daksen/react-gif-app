import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = "Hola mundo";

    test('debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar los items cuando se cargan las imágenes', () => {
        const gifs = [{
            id: "1",
            url: "https://localhost/test/test.gif",
            title: "Test"
        },{
            id: "1",
            url: "https://localhost/test/test.gif",
            title: "Test"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
