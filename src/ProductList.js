import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductHeader } from './ProductHeader';

export const ProductList = () => {
    return (
        <div className="product-list">
            <div className="title">Name   Price</div>
            <ProductHeader />
            <ProductCard />
        </div>
    )
}