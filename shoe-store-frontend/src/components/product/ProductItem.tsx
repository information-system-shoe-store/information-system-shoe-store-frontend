import React, { FC } from 'react';
import { IProduct } from "../../types/types";

interface UserItemProps {
  product: IProduct;
}

const ProductItem: FC<UserItemProps> = ({ product }) => {

  return (
    <div>
    </div>
  );
};

export default ProductItem;