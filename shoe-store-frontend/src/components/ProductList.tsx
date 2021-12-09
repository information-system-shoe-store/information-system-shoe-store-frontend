import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { IProduct } from '../types/types';

interface ProductListProps {
    products: IProduct[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {

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
                            #
                        </th>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product =>
                                <tr>
                                    <th scope="row" key={product.id}>{product.id}</th>
                                    <td>{product.name}</td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList;