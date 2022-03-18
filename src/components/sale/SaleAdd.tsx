import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, TextField } from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { ISale } from '../../types/types';

interface ModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
}

const BASE_SALE_URL = 'http://localhost:8080/sale/';

const SaleAdd: FC<ModalProps> = ({ isModalVisible, closeModal }) => {
    const [saleDate, setSaleDate] = useState<string>(new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date()));
    const [price, setPrice] = useState<number>();
    const [amountSold, setAmountSold] = useState<number>();

    async function addSale(newSale: ISale) {
        try {
            await axios.post(BASE_SALE_URL, newSale);
        } catch (e) {
            alert(e);
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const newSale: ISale = { saleDate: saleDate, price: price, amountSold: amountSold };

        addSale(newSale);

        console.log(newSale)

        closeModal();

        window.location.reload();
    }

    return (
        <div>
            <Dialog open={isModalVisible} onClose={closeModal} fullWidth maxWidth="sm">
                <DialogTitle><h2>Добавить продажу</h2></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">
                                    <h4>Дата продажи</h4>
                                </Label>
                                <TextField fullWidth
                                    id="saleDate"
                                    name="saleDate"
                                    variant="standard"
                                    type="text"
                                    value={saleDate}
                                    onChange={e => setSaleDate(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">
                                    <h4>Стоимость продажи</h4>
                                </Label>
                                <TextField fullWidth
                                    id="price"
                                    name="price"
                                    variant="standard"
                                    type="number"
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="amountSold">
                                    <h4>Количество продаж</h4>
                                </Label>
                                <TextField fullWidth
                                    id="amountSold"
                                    name="amountSold"
                                    variant="standard"
                                    type="number"
                                    value={amountSold}
                                    onChange={e => setAmountSold(Number(e.target.value))}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="products">
                                    <h4>Товар</h4>
                                </Label>
                                <Input
                                    id="products"
                                    name="products"
                                    type="select"
                                >
                                    <option>
                                        Кроссовки
                                    </option>
                                    <option>
                                        Туфли
                                    </option>
                                    <option>
                                        Тапочки
                                    </option>
                                    <option>
                                        Кеды
                                    </option>
                                    <option>
                                        Ботинки
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

export default SaleAdd;