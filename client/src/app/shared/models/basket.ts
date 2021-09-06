//declare module namespace {
import uuid from 'uuid/v4';
    export interface IBasketItem {
        id: number;
        productName: string;
        pictureUrl: string;
        price: number;
        quantity: number;
        brand: string;
        type: string;
    }

    export interface IBasket {
        id: string;
        items: IBasketItem[];
    }

    export class Basket implements IBasket{
        id=uuid();
        items : IBasketItem[]=[];

    }
    export interface IBasketTotals
    {
        shipping : number;
        subtotal : number;
        total : number;

    }

//}

