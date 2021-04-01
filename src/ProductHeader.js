import React from 'react';

export const ProductHeader = ({ category }) => {
    return (
        <>
            <h3 className="product-header">{category}</h3>
        </>
    )
}