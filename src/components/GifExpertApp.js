import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

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

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.arrayOf(PropTypes.string)
}
 
export default GifExpertApp;
