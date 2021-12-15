export interface IProduct {
    id?: number;
    name?: string;
    manufacturer?: string;
    amount?: number;
    receiptDate?: string;
    unitPrice?: number;
    providers?: IProvider[];
}

export interface IProvider {
    id?: number;
    name?: string;
    phone?: number;
    adress?: string;
    contactPerson?: string;
    products?: IProduct[];
}

export interface ISale {
    id?: number;
    saleDate?: Date;
    price?: number;
    amountSold?: number;
    products?: IProduct[];
}