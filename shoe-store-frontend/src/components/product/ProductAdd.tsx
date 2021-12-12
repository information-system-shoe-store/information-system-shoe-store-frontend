import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@material-ui/core';
import { FC } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

interface ModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const ProductAdd: FC<ModalProps> = ({ isModalVisible, closeModal }) => {

  return (
    <div>
      <Dialog open={isModalVisible} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle><h2>Добавить товар</h2></DialogTitle>
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
                  placeholder="Кроссовки"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="manufacturer">
                  <h4>Производитель</h4>
                </Label>
                <Input
                  id="manufacturer"
                  name="manufacturer"
                  placeholder="Nike"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">
                  <h4>Количество</h4>
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  placeholder="3"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="receiptDate">
                  <h4>Дата поступления</h4>
                </Label>
                <Input
                  id="receiptDate"
                  name="receiptDate"
                  placeholder="10.12.2021"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="unitPrice">
                  <h4>Цена за единицу</h4>
                </Label>
                <Input
                  id="unitPrice"
                  name="unitPrice"
                  placeholder="5500.05"
                  type="number"
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
              </Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Закрыть</Button>
          <Button onClick={closeModal}>Сохранить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductAdd;