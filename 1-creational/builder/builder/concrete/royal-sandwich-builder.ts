import {SandwichBuilder} from "../abstract/sandwich-builder";
import {BreadType} from "../../enums/bread-type";
import {CheeseType} from "../../enums/cheese-type";
import {MeatType} from "../../enums/meat-type";

// Royal Sandwich Representation
export class RoyalSandwichBuilder extends SandwichBuilder {
    public prepareBread(): void {
        this.sandwich.setBreadType(BreadType.WHITE);
        this.sandwich.setToasted(false);
    }

    public applyMeatAndCheese(): void {
        this.sandwich.setMeatType(MeatType.CHICKEN);
        this.sandwich.setCheeseType(CheeseType.CHEDDAR);
    }

    public applyVegetables(): void {
        this.sandwich.setVegetables(["Tomato", "Onion"]);
    }

    public addCondiments(): void {
        this.sandwich.setHasMayonnaise(true);
        this.sandwich.setHasMustard(false);
    }
}