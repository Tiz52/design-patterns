import {SandwichDirector} from "./director/sandwich-director";
import {Sandwich} from "./product/sandwich";
import {SandwichBuilder} from "./builder/abstract/sandwich-builder";
import { BuilderFactory } from './builder-factory';
import { SandwichType } from "./enums/sandwich-type";

function clientCode() {
    let builder: SandwichBuilder = BuilderFactory.getBuilder(SandwichType.CLUB);
    let sandwichDirector: SandwichDirector = new SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    let sandwich: Sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}

clientCode();