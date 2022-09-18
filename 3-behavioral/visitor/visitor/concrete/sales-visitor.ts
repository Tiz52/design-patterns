import {Visitor} from "../abstract/visitor";
import {Book} from "../../element/concrete/book";
import {Laptop} from "../../element/concrete/laptop";
import {IPhone} from "../../element/concrete/iphone";
import {MacBookPro} from "../../element/concrete/macbookpro";

export class SalesVisitor implements Visitor {
    private bookCount: number = 0;
    private laptopCount: number = 0;
    private iphoneCount: number = 0;
    private macCount: number = 0;

    public visitBook(book: Book): void {
        this.bookCount++;
    }

    public visitLaptop(laptop: Laptop): void {
        this.laptopCount++;
    }

    public visitIPhone(iphone: IPhone): void {
        this.iphoneCount++;
    }

    public visitMacBookPro(mac: MacBookPro): void {
        this.macCount++;
    }

    public print(): void {
        console.log("Books sold: %d \nLaptops sold: %d \niPhones sold: %d \nMacBookPro sold: %d", this.bookCount, this.laptopCount, this.iphoneCount, this.macCount);
        console.log("The store sold %d units today!", (this.bookCount + this.laptopCount + this.iphoneCount + this.macCount));
    }

    public reset(): void {
        this.bookCount = 0;
        this.laptopCount = 0;
        this.iphoneCount = 0;
        this.macCount = 0;
    }
}