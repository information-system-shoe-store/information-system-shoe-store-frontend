import { FC } from 'react';
import { Table } from 'reactstrap';
import { ISale } from '../../types/types';
import { useNavigate } from 'react-router-dom'

interface SalesTableProps {
    sales: ISale[];
    onClick: (sale: ISale) => void;
}

const SalesTable: FC<SalesTableProps> = ({ sales, onClick }) => {

    const navigate = useNavigate()

    const getSale = (sale: ISale) => {
        navigate('/sales/' + sale.id);
        onClick(sale);
    }

    return (
        <div>
            <h2 className="text-center">Список продаж</h2>
            <Table
                bordered
                hover
                size=""
            >
                <thead>
                    <tr>
                        <th>
                            Код продажи
                        </th>
                        <th>
                            Дата продажи
                        </th>
                        <th>
                            Стоимость продажи
                        </th>
                        <th>
                            Количество продаж
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sales.map(
                            sale =>
                                <tr onClick={() => { getSale(sale) }}>
                                    <th scope="row" key={sale.id}>{sale.id}</th>
                                    <td>{sale.saleDate}</td>
                                    <td>{sale.price}</td>
                                    <td>{sale.amountSold}</td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default SalesTable;