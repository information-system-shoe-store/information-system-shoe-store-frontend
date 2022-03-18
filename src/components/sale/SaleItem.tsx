import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { ISale } from "../../types/types";
import { useNavigate, useParams } from 'react-router-dom';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@material-ui/core';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const BASE_SALE_URL = 'http://localhost:8080/sale/';

interface ModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
}

const SaleItem: FC<ModalProps> = ({ isModalVisible, closeModal }) => {

    const [sale, setSale] = useState<ISale | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/sales');
        closeModal();
    }

    useEffect(() => {
        fetchSale();
    }, [])

    async function fetchSale() {
        try {
            const response = await axios.get<ISale>(BASE_SALE_URL + params.id)
            setSale(response.data)
        } catch (e) {
            setSale(null);
        }
    }

    return (
        <div>
            <Dialog open={isModalVisible} onClose={goBack} fullWidth maxWidth="sm">
                <DialogTitle><h2>Продажа № {sale?.id}</h2></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Form>
                            <FormGroup>
                                <Label for="saleDate">
                                    <h4>Дата продажи</h4>
                                </Label>
                                <Input
                                    id="saleDate"
                                    name="saleDate"
                                    placeholder={sale?.saleDate}
                                    type="text"
                                    disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">
                                    <h4>Стоимость продажи</h4>
                                </Label>
                                <Input
                                    id="price"
                                    name="price"
                                    placeholder={String(sale?.price)}
                                    type="number"
                                    disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="amountSold">
                                    <h4>Количество продаж</h4>
                                </Label>
                                <Input
                                    id="amountSold"
                                    name="amountSold"
                                    placeholder={String(sale?.amountSold)}
                                    type="number"
                                    disabled
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
                                    disabled
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

export default SaleItem;