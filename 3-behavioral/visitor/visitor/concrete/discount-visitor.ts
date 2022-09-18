import {Visitor} from "../abstract/visitor";
import {Book} from "../../element/concrete/book";
import {Laptop} from "../../element/concrete/laptop";
import {IPhone} from "../../element/concrete/iphone";
import {MacBookPro} from "../../element/concrete/macbookpro";

export class DiscountVisitor implements Visitor {
    private savings: number;

    public visitBook(book: Book): void {
        let discount: number = 0.0;
        if (book.getPrice() < 20.00) {
            discount = book.getDiscount(0.10);
            console.log("DISCOUNTED: Book #" + book.getId() + " is now " + (book.getPrice() - discount));
        } else {
            console.log("FULL PRICE: Book #" + book.getId() + " is " + (book.getPrice()));
        }
        this.savings += discount;
    }

    public visitLaptop(laptop: Laptop): void {
        let discount: number = laptop.getDiscount(0.20);
        console.log("SUPER SAVINGS: Laptop #" + laptop.getId() + " is now " + (laptop.getPrice() - discount));
        this.savings += discount;
    }

    public visitIPhone(iphone: IPhone): void {
        let discount: number = iphone.getDiscount(0.50);
        console.log("SUPER SAVINGS: IPhone #" + iphone.getId() + " is now " + (iphone.getPrice() - discount));
        this.savings += discount;
    }

    public visitMacBookPro(mac: MacBookPro): void {
        let discount: number = mac.getDiscount(0.50);
        console.log("SUPER SAVINGS: MacBookPro #" + mac.getId() + " is now " + (mac.getPrice() - discount));
        this.savings += discount;
    }

    public print(): void {
    }

    public reset(): void {
        this.savings = 0.0;
    }

    public getSavings() {
        return this.savings;
    }
}