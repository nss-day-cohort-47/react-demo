import React from 'react';

export const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <div className="item-name">{item.name}</div>
            <div className="item-price">{item.price}</div>
        </div>
    )
}