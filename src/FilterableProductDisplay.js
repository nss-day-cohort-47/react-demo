import React from 'react';
import { ProductList } from './ProductList';
import { SearchBar } from './SearchBar';
import { useData } from "./data"


export const FilterableProductDisplay = () => {
    const data = useData()
    return (
        <div className="product-display">
            <SearchBar />
            <ProductList data={data} />
        </div>
    )
}