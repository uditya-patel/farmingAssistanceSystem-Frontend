import { Product } from "./product";
import { User } from "./user";

export class Order {
    quantiityRequired: number;
    status: string;
    supplier: User;
    // products: Product[];
}
