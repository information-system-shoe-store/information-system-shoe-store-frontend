import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { IProduct } from '../../types/types';
import Header from '../Header';
import ProductAdd from './ProductAdd';
import ProductItemModal from './ProductItem';
import ProductTable from './ProductsTable';

const BASE_PRODUCT_URL = 'http://localhost:8080/product/';

const ProductsPage: FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            const response = await axios.get<IProduct[]>(BASE_PRODUCT_URL)
            setProducts(response.data)
        } catch (e) {
            setProducts([]);
        }
    }

    const [isAddProductModalVisible, setAddProductModalVisible] = useState<boolean>(false);
    const [isItemProductModalVisible, setItemProductModalVisible] = useState<boolean>(false);

    const toggleAddProductModal = () => {
        setAddProductModalVisible(!isAddProductModalVisible)
    }

    const toggleItemProductModal = () => {
        setItemProductModalVisible(!isItemProductModalVisible)
    }

    return (
        <div>
            <header><Header /></header>
            <div className="m-2">
                <Button color="dark" outline size="lg" onClick={toggleAddProductModal}>
                    Добавить товар
                </Button>
                {isAddProductModalVisible && <ProductAdd isModalVisible={isAddProductModalVisible} closeModal={toggleAddProductModal} />}
            </div>
            <ProductTable onClick={toggleItemProductModal} products={products} />
            {isItemProductModalVisible && <ProductItemModal isModalVisible={isItemProductModalVisible} closeModal={toggleItemProductModal} />}
        </div>
    );
};

export default ProductsPage;