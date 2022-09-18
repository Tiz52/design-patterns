import {Sandwich} from "../../product/sandwich";

// Builder Abstracto
export abstract class SandwichBuilder {
    protected sandwich: Sandwich; // Producto

    public getSandwich(): Sandwich {
        return this.sandwich;
    }

    public createNewSandwich() {
        this.sandwich = new Sandwich();
    }

    //Building Parts
    public abstract prepareBread(): void;
    public abstract applyMeatAndCheese(): void;
    public abstract applyVegetables(): void;
    public abstract addCondiments(): void;
}