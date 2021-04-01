import React from 'react';

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" name="search" id="search" />
            <div>
                <input type="checkbox" name="" id="" />
                Only show products in stock.
            </div>
        </div>
    )
}