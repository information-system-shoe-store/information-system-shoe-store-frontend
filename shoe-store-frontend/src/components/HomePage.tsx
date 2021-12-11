import { FC, useEffect, useState } from 'react';
import { IProduct } from '../types/types';
import Header from './Header';
import ProductItem from './product/ProductItem';


const HomePage: FC = () => {

    const product: IProduct = { id: 4, name: 'Test4', manufacturer: 'TestManufacturer4', amount: 121, unitPrice: 1100.002 };

    return (
        <div>
            <header><Header /></header>
            <h1>Домашняя страница</h1>
            <ProductItem product={product} />
        </div>
    );
};

export default HomePage;