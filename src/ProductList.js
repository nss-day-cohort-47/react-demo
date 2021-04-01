import React from 'react';
import { ProductCategory } from './ProductCategory';


export const ProductList = ({ data }) => {

    // create a new data set where the items are grouped by category
    const groupByCategory = data.reduce((acc, cv) => {
        acc[cv.category] = [...acc[cv.category] || [], cv];
        return acc
    }, {});

    return (
        <div className="product-list">
            <div className="title">Name   Price</div>
            {
                Object.entries(groupByCategory).map((category, i) =>
                    <ProductCategory key={i} category={category} />
                )
            }
        </div>
    )
}