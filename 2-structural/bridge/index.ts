import {Formatter} from "./implementor/abstract/formatter";
import {Book} from "./abstraction/refined/book";
import {Paper} from "./abstraction/refined/paper";
import {WhitePaper} from "./abstraction/refined/white-paper";
import {FormatterFactory} from "./factory/formatter-factory";
import {FormatterType} from "./factory/formatter-type";
import {Brochure} from "./abstraction/refined/brochure";
import {Thesis} from "./abstraction/refined/thesis";
import { Draft } from "./abstraction/refined/draft";

function clientCode() {
    let draftFormatter: Formatter = FormatterFactory.getType(FormatterType.STANDARD);
    let draft: Draft = new Draft(draftFormatter);
    draft.changeText("Text of the draft");
    draft.print();

    let formatter: Formatter = FormatterFactory.getType(FormatterType.VANCOUVER);

    let brochure: Brochure = new Brochure(formatter);
    brochure.changeText("Text of the brochure");
    brochure.print();

    console.log("*************************************************************");
    let thesis: Thesis = new Thesis(formatter);
    thesis.changeAuthor("Juan Pérez");
    thesis.changeTitle("Design Patterns");
    thesis.changeText("Text of the thesis");
    thesis.changeReferences("References of the thesis");
    thesis.print();

    console.log("*************************************************************");
    let book: Book = new Book(formatter);
    book.changeAuthor("Robert C. Martin");
    book.changeTitle("Clean Code");
    book.changeText("Text of the book");
    book.print();

    console.log("*************************************************************");
    let whitePaper: WhitePaper = new WhitePaper(formatter);
    whitePaper.changeAuthor("Juan Pérez");
    whitePaper.changeTitle("Design Patterns");
    whitePaper.changeText("Text of the paper");
    whitePaper.changeReferences("References of the white paper");
    whitePaper.print();

    console.log("*************************************************************");
    let apaFormatter: Formatter = FormatterFactory.getType(FormatterType.APA);
    let paper: Paper = new Paper(apaFormatter);
    paper.changeAuthor("Juan Pérez");
    paper.changeTitle("Design Patterns");
    paper.changeText("Text of the paper");
    paper.changeReferences("References of the paper");
    paper.print();
}

clientCode();