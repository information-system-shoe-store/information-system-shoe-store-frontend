import React from 'react';
import ProductList from './components/ProductList';
import { IProduct } from './types/types';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const products: IProduct[] = [
        {id: 1, name: 'Test1'},
        {id: 2, name: 'Test2'}
    ]
    return (
        <div>
        <ProductList products={products}/>
        </div>
    );
};

export default Application;