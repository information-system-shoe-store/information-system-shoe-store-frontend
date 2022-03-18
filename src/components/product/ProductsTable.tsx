import { FC } from 'react';
import { Table } from 'reactstrap';
import { IProduct } from '../../types/types';
import { useNavigate } from 'react-router-dom'

interface ProductTableProps {
    products: IProduct[]
    onClick: (product: IProduct) => void;
}

const ProductTable: FC<ProductTableProps> = ({ products, onClick }) => {

    const navigate = useNavigate()

    const getProduct = (product: IProduct) => {
        navigate('/products/' + product.id);
        onClick(product);
    }

    return (
        <div>
            <h2 className="text-center">Список обуви</h2>
            <Table
                bordered
                hover
                size=""
            >
                <thead>
                    <tr>
                        <th>
                            Код товара
                        </th>
                        <th>
                            Наименование
                        </th>
                        <th>
                            Производитель
                        </th>
                        <th>
                            Количество
                        </th>
                        <th>
                            Дата поступления
                        </th>
                        <th>
                            Цена за единицу
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product =>
                                <tr onClick={() => { getProduct(product) }}>
                                    <th scope="row" key={product.id}>{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.manufacturer}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.receiptDate}</td>
                                    <td>{product.unitPrice}</td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable;