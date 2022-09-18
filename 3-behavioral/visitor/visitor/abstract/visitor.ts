import {Book} from "../../element/concrete/book";
import {Laptop} from "../../element/concrete/laptop";
import {IPhone} from "../../element/concrete/iphone";
import {MacBookPro} from "../../element/concrete/macbookpro";

export interface Visitor {
    visitBook(book: Book): void;
    visitLaptop(laptop: Laptop): void;
    visitIPhone(iphone: IPhone): void;
    visitMacBookPro(mac: MacBookPro): void;
    print(): void;
    reset(): void;
}