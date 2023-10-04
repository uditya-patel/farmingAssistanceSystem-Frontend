import { Product } from "./product";

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(product: Product) {

        this.id = product.productId;
        this.name = product.productName;
        this.imageUrl = product.productImgUrl;
        this.unitPrice = product.productUnitPrice;
        this.quantity = 1;

    }
}
