import { FC } from 'react';
import { Table } from 'reactstrap';
import { IProvider } from '../../types/types';
import { useNavigate } from 'react-router-dom'

interface ProvidersTableProps {
    providers: IProvider[];
    onClick: (provider: IProvider) => void;
}

const ProvidersTable: FC<ProvidersTableProps> = ({ providers, onClick }) => {

    const navigate = useNavigate()

    const getProvider = (provider: IProvider) => {
        navigate('/providers/' + provider.id);
        onClick(provider);
    }

    return (
        <div>
            <h2 className="text-center">Список поставщиков</h2>
            <Table
                bordered
                hover
                size=""
            >
                <thead>
                    <tr>
                        <th>
                            Код поставщика
                        </th>
                        <th>
                            Наименование
                        </th>
                        <th>
                            Телефон
                        </th>
                        <th>
                            Адрес
                        </th>
                        <th>
                            Контактное лицо
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        providers.map(
                            provider =>
                                <tr onClick={() => { getProvider(provider) }}>
                                    <th scope="row" key={provider.id}>{provider.id}</th>
                                    <td>{provider.name}</td>
                                    <td>{provider.phone}</td>
                                    <td>{provider.address}</td>
                                    <td>{provider.contactPerson}</td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProvidersTable;