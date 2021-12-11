import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IProduct } from '../../types/types';
import Header from '../Header';
import ProductTable from './ProductTable';

const ProductsPage: FC = () => {

    // const products: IProduct[] = [
    //     { id: 1, name: 'Test1', manufacturer: 'TestManufacturer2', amount: 12, unitPrice: 1100.3 },
    //     { id: 2, name: 'Test2', manufacturer: 'TestManufacturer2', amount: 150, unitPrice: 15.05 },
    //     { id: 3, name: 'Test3', manufacturer: 'TestManufacturer3', amount: 1050, unitPrice: 100 },
    // ]

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            const response = await axios.get<IProduct[]>('http://localhost:8080/product')
            setProducts(response.data)
        } catch (e) {
            setProducts([]);
        }
    }

    return (
        <div>
            <header><Header /></header>
            <ProductTable products={products} />
        </div>
    );
};

export default ProductsPage;