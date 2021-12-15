import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, TextField } from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { IProduct } from '../../types/types';

interface ModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const BASE_PRODUCT_URL = 'http://localhost:8080/product/';

const ProductAdd: FC<ModalProps> = ({ isModalVisible, closeModal }) => {
  const [name, setName] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [receiptDate, setReceiptDate] = useState<string>(new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date()));
  const [unitPrice, setUnitPrice] = useState<number>();

  async function addProduct(newProduct: IProduct) {
    try {
      await axios.post(BASE_PRODUCT_URL, newProduct);
    } catch (e) {
      alert(e);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const newProduct: IProduct = { name: name, manufacturer: manufacturer, amount: amount, receiptDate: receiptDate, unitPrice: unitPrice };

    addProduct(newProduct);

    console.log(newProduct)

    closeModal();

    window.location.reload();
  }

  return (
    <div>
      <Dialog open={isModalVisible} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle><h2>Добавить товар</h2></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">
                  <h4>Наименование обуви</h4>
                </Label>
                <TextField fullWidth
                  id="name"
                  name="name"
                  variant="standard"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="manufacturer">
                  <h4>Производитель</h4>
                </Label>
                <TextField fullWidth
                  id="manufacturer"
                  name="manufacturer"
                  variant="standard"
                  type="text"
                  value={manufacturer}
                  onChange={e => setManufacturer(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">
                  <h4>Количество</h4>
                </Label>
                <TextField fullWidth
                  id="amount"
                  name="amount"
                  variant="standard"
                  type="number"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <Label for="receiptDate">
                  <h4>Дата поступления</h4>
                </Label>
                <TextField fullWidth
                  id="receiptDate"
                  name="receiptDate"
                  variant="standard"
                  type="text"
                  value={receiptDate}
                  onChange={e => setReceiptDate(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="unitPrice">
                  <h4>Цена за единицу</h4>
                </Label>
                <TextField fullWidth
                  id="unitPrice"
                  name="unitPrice"
                  variant="standard"
                  type="number"
                  value={unitPrice}
                  onChange={e => setUnitPrice(Number(e.target.value))}
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
                >
                  <option>
                    Nike
                  </option>
                  <option>
                    Adidas
                  </option>
                  <option>
                    Puma
                  </option>
                  <option>
                    Reebok
                  </option>
                  <option>
                    New Balance
                  </option>
                </Input>
              </FormGroup>
              <DialogActions>
                <Button type="submit">Сохранить</Button>
              </DialogActions>
            </Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductAdd;