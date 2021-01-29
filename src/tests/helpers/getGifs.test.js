import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
   
    test('debe de retornar 10 elementos', async() => {
        const gifs = await getGifs('Star Wars');
        expect( gifs.length ).toBe(10);
    });

    test('no debe de retornar elementos', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
    
});
