import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IProvider } from "../../types/types";
import { useNavigate, useParams } from 'react-router-dom';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog } from '@material-ui/core';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const BASE_PROVIDER_URL = 'http://localhost:8080/provider/';

interface ModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
}

const ProviderItem: FC<ModalProps> = ({ isModalVisible, closeModal }) => {

    const [provider, setProvider] = useState<IProvider | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/providers');
        closeModal();
    }

    useEffect(() => {
        fetchProvider();
    }, [])

    async function fetchProvider() {
        try {
            const response = await axios.get<IProvider>(BASE_PROVIDER_URL + params.id)
            setProvider(response.data)
        } catch (e) {
            setProvider(null);
        }
    }

    return (
        <div>
            <Dialog open={isModalVisible} onClose={goBack} fullWidth maxWidth="sm">
                <DialogTitle><h2>Поставщик № {provider?.id}</h2></DialogTitle>
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
                                    placeholder={provider?.name}
                                    type="text"
                                    disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">
                                    <h4>Телефон</h4>
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder={provider?.phone}
                                    type="text"
                                    disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">
                                    <h4>Адрес</h4>
                                </Label>
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder={provider?.address}
                                    type="text"
                                    disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="contactPerson">
                                    <h4>Контактное лицо</h4>
                                </Label>
                                <Input
                                    id="contactPerson"
                                    name="contactPerson"
                                    placeholder={provider?.contactPerson}
                                    type="text"
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

export default ProviderItem;