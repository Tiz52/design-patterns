import {SandwichBuilder} from "../abstract/sandwich-builder";
import {BreadType} from "../../enums/bread-type";
import {CheeseType} from "../../enums/cheese-type";
import {MeatType} from "../../enums/meat-type";

// MonteCristo Representation
export class MonteCristoSandwichBuilder extends SandwichBuilder {
    public prepareBread(): void {
        this.sandwich.setBreadType(BreadType.WHITE);
        this.sandwich.setToasted(false);
    }

    public applyMeatAndCheese(): void {
        this.sandwich.setMeatType(MeatType.HAM);
        this.sandwich.setCheeseType(CheeseType.AMERICAN);
    }

    public applyVegetables(): void {
        this.sandwich.setVegetables(["Lettuce"]);
    }

    public addCondiments(): void {
        this.sandwich.setHasMayonnaise(true);
        this.sandwich.setHasMustard(false);
    }
}