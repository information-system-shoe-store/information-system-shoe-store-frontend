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
    phone?: string;
    address?: string;
    contactPerson?: string;
    products?: IProduct[];
}

export interface ISale {
    id?: number;
    saleDate?: string;
    price?: number;
    amountSold?: number;
    products?: IProduct[];
}

export interface ICountStatistic {
    productCount?: number;
    providerCount?: number;
    saleCount?: number;
}

export interface IDateRange {
    startDate?: Date;
    endDate?: Date;
}