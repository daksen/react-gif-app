import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Star Wars"]);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <div>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            </div>
        </>
    );
}
 
export default GifExpertApp;
