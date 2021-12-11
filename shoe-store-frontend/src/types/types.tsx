export interface IProduct {
    id: number;
    name?: string;
    manufacturer?: string;
    amount?: number;
    receiptDate?: Date;
    unitPrice?: number;
    providers?: IProvider[];
    sellers?: ISeller[];
}

export interface IProvider {
    id: number;
    name?: string;
    phone?: number;
    adress?: string;
    contactPerson?: string;
    products?: IProduct[];
}

export interface ISale {
    id: number;
    saleDate?: Date;
    price?: number;
    amountSold?: number;
    products?: IProduct[];
}

export interface ISeller {
    id: number;
    personalNumber?: string;
    fullName?: string;
    position?: string;
    products?: IProduct[];
}