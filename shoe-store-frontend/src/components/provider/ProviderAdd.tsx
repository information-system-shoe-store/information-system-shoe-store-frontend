import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, TextField } from '@material-ui/core';
import { FC, FormEvent, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { IProvider } from '../../types/types';

interface ModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
}

const BASE_PROVIDER_URL = 'http://localhost:8080/provider/';

const ProviderAdd: FC<ModalProps> = ({ isModalVisible, closeModal }) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [contactPerson, setContactPerson] = useState<string>("");

    async function addProvider(newProvider: IProvider) {
        try {
            await axios.post(BASE_PROVIDER_URL, newProvider);
        } catch (e) {
            alert(e);
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const newProvider: IProvider = { name: name, phone: phone, address: address, contactPerson: contactPerson };

        addProvider(newProvider);

        console.log(newProvider)

        closeModal();

        window.location.reload();
    }

    return (
        <div>
            <Dialog open={isModalVisible} onClose={closeModal} fullWidth maxWidth="sm">
                <DialogTitle><h2>Добавить поставщика</h2></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">
                                    <h4>Наименование поставщика</h4>
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
                                <Label for="phone">
                                    <h4>Телефон</h4>
                                </Label>
                                <TextField fullWidth
                                    id="phone"
                                    name="phone"
                                    variant="standard"
                                    type="text"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">
                                    <h4>Адрес</h4>
                                </Label>
                                <TextField fullWidth
                                    id="address"
                                    name="address"
                                    variant="standard"
                                    type="text"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="contactPerson">
                                    <h4>Контактное лицо</h4>
                                </Label>
                                <TextField fullWidth
                                    id="contactPerson"
                                    name="contactPerson"
                                    variant="standard"
                                    type="text"
                                    value={contactPerson}
                                    onChange={e => setContactPerson(e.target.value)}
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

export default ProviderAdd;