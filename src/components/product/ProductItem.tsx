import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IProduct } from "../../types/types";
import { useNavigate, useParams } from 'react-router-dom';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@material-ui/core';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const BASE_PRODUCT_URL = 'http://localhost:8080/product/';

interface ModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const ProductItem: FC<ModalProps> = ({ isModalVisible, closeModal }) => {

  const [product, setProduct] = useState<IProduct | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/products');
    closeModal();
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  async function fetchProduct() {
    try {
      const response = await axios.get<IProduct>(BASE_PRODUCT_URL + params.id)
      setProduct(response.data)
    } catch (e) {
      setProduct(null);
    }
  }

  return (
    <div>
      <Dialog open={isModalVisible} onClose={goBack} fullWidth maxWidth="sm">
        <DialogTitle><h2>Товар № {product?.id}</h2></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form>
              <FormGroup>
                <Label for="name">
                  <h4>Наименование</h4>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={product?.name}
                  type="text"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="manufacturer">
                  <h4>Производитель</h4>
                </Label>
                <Input
                  id="manufacturer"
                  name="manufacturer"
                  placeholder={product?.manufacturer}
                  type="text"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">
                  <h4>Количество</h4>
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  placeholder={String(product?.amount)}
                  type="number"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="receiptDate">
                  <h4>Дата поступления</h4>
                </Label>
                <Input
                  id="receiptDate"
                  name="receiptDate"
                  placeholder={String(product?.receiptDate)}
                  type="text"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="unitPrice">
                  <h4>Цена за единицу</h4>
                </Label>
                <Input
                  id="unitPrice"
                  name="unitPrice"
                  placeholder={String(product?.unitPrice)}
                  type="number"
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="providers">
                  <h4>Поставщик</h4>
                </Label>
                <Input
                  id="providers"
                  name="providers"
                  type="select"
                  disabled
                >
                  <option>
                    OOO Поставщик красивых кросовок
                  </option>
                  <option>
                    OOO Поставщик крутых кросовок
                  </option>
                  <option>
                    OOO Поставщик удобной обуви
                  </option>
                </Input>
              </FormGroup>
            </Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={goBack}>Закрыть</Button>
          <Button onClick={goBack}>Изменить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductItem;