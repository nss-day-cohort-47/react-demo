import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductHeader } from './ProductHeader';

export const ProductCategory = ({ category }) => {
    return (
        <>
            <ProductHeader category={category[0]} />
            {
                category[1].map(item =>
                    <ProductCard key={item.id} item={item} />
                )
            }
        </>
    )
}