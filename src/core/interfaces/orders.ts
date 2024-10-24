export interface OrderDetail {
    id: number;
    price: number;
    quantity: number;
    total: number;
    productId: number;
    variantId: number;
}

interface PaymentMethod {
    id: number;
    name: string;
}

interface Status {
    id: number;
    name: string;
}

export interface Order {
    id: number;
    userId: string;
    total: number;
    cityId: string;
    address: string;
    createdAt: string; // Consider using Date type if necessary
    updatedAt: string; // Same as above
    statusId: Status;
    orderDetails: OrderDetail[];
    paymentMethod: PaymentMethod;
}