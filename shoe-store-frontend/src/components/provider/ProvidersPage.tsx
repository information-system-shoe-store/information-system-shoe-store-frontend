import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { IProvider } from '../../types/types';
import Header from '../Header';
import ProviderAdd from './ProviderAdd';
import ProviderItem from './ProviderItem';
import ProviderTable from './ProvidersTable';

const BASE_PROVIDER_URL = 'http://localhost:8080/provider/';

const ProvidersPage: FC = () => {

    const [providers, setProviders] = useState<IProvider[]>([])

    useEffect(() => {
        fetchProviders();
    }, [])

    async function fetchProviders() {
        try {
            const response = await axios.get<IProvider[]>(BASE_PROVIDER_URL)
            setProviders(response.data)
        } catch (e) {
            setProviders([]);
        }
    }

    const [isAddProviderModalVisible, setAddProviderModalVisible] = useState<boolean>(false);
    const [isItemProviderModalVisible, setItemProviderModalVisible] = useState<boolean>(false);

    const toggleAddProviderModal = () => {
        setAddProviderModalVisible(!isAddProviderModalVisible)
    }

    const toggleItemProviderModal = () => {
        setItemProviderModalVisible(!isItemProviderModalVisible)
    }

    return (
        <div>
            <header><Header /></header>
            <div className="m-2">
                <Button color="dark" outline size="lg" onClick={toggleAddProviderModal}>
                    Добавить поставщика
                </Button>
                {isAddProviderModalVisible && <ProviderAdd isModalVisible={isAddProviderModalVisible} closeModal={toggleAddProviderModal} />}
            </div>
            <ProviderTable onClick={toggleItemProviderModal} providers={providers} />
            {isItemProviderModalVisible && <ProviderItem isModalVisible={isItemProviderModalVisible} closeModal={toggleItemProviderModal} />}
        </div>
    );
};

export default ProvidersPage;