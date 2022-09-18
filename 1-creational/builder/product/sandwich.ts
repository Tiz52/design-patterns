import {BreadType} from "../enums/bread-type";
import {CheeseType} from "../enums/cheese-type";
import {MeatType} from "../enums/meat-type";

// Product
export class Sandwich {
    private breadType: BreadType;
    private isToasted: boolean;
    private cheeseType: CheeseType;
    private meatType: MeatType;
    private hasMustard: boolean;
    private hasMayonnaise: boolean;
    private vegetables: string[];

    public setBreadType(breadType: BreadType): void {
        this.breadType = breadType;
    }

    public setCheeseType(cheeseType: CheeseType): void {
        this.cheeseType = cheeseType;
    }

    public setMeatType(meatType: MeatType): void {
        this.meatType = meatType;
    }

    public setToasted(isToasted: boolean): void {
        this.isToasted = isToasted;
    }

    public setHasMustard(hasMustard: boolean): void {
        this.hasMustard = hasMustard;
    }

    public setHasMayonnaise(hasMayonnaise: boolean): void {
        this.hasMayonnaise = hasMayonnaise;
    }

    public setVegetables(vegetables: string[]): void {
        this.vegetables = vegetables;
    }

    public display(): void {
        console.log("Sandwich on %s bread", this.breadType);
        if (this.isToasted) {
            console.log("Toasted");
        }
        if (this.hasMayonnaise) {
            console.log("With Mayonnaise");
        }
        if (this.hasMustard) {
            console.log("With Mustard");
        }
        console.log("Meat: %s", this.meatType);
        console.log("Cheese: %s", this.cheeseType);
        console.log("Veggies:");
        for (let index in this.vegetables) {
            console.log("   %s", this.vegetables[index]);
        }
        console.log("******************************");
    }
}