import React from 'react';
import { ProductList } from './ProductList';
import { SearchBar } from './SearchBar';

export const FilterableProductDisplay = () => {
    return (
        <div className="product-display">
            <SearchBar />
            <ProductList />
        </div>
    )
}