import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { ISale } from '../../types/types';
import Header from '../Header';
import SaleAdd from './SaleAdd';
import SaleItem from './SaleItem';
import SaleTable from './SalesTable';

const BASE_SALE_URL = 'http://localhost:8080/sale/';

const SalesPage: FC = () => {

    const [sales, setSales] = useState<ISale[]>([])

    useEffect(() => {
        fetchSales();
    }, [])

    async function fetchSales() {
        try {
            const response = await axios.get<ISale[]>(BASE_SALE_URL)
            setSales(response.data)
        } catch (e) {
            setSales([]);
        }
    }

    const [isAddSaleModalVisible, setAddSaleModalVisible] = useState<boolean>(false);
    const [isItemSaleModalVisible, setItemSaleModalVisible] = useState<boolean>(false);

    const toggleAddSaleModal = () => {
        setAddSaleModalVisible(!isAddSaleModalVisible)
    }

    const toggleItemSaleModal = () => {
        setItemSaleModalVisible(!isItemSaleModalVisible)
    }

    return (
        <div>
            <header><Header /></header>
            <div className="m-2">
                <Button color="dark" outline size="lg" onClick={toggleAddSaleModal}>
                    Добавить продажу
                </Button>
                {isAddSaleModalVisible && <SaleAdd isModalVisible={isAddSaleModalVisible} closeModal={toggleAddSaleModal} />}
            </div>
            <SaleTable onClick={toggleItemSaleModal} sales={sales} />
            {isItemSaleModalVisible && <SaleItem isModalVisible={isItemSaleModalVisible} closeModal={toggleItemSaleModal} />}
        </div>
    );
};

export default SalesPage;