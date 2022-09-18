import { SandwichBuilder } from './builder/abstract/sandwich-builder';
import { ClubSandwichBuilder } from './builder/concrete/club-sandwich-builder';
import { MonteCristoSandwichBuilder } from './builder/concrete/monte-cristo-sandwich-builder';
import { RoyalSandwichBuilder } from './builder/concrete/royal-sandwich-builder';
import { SandwichType } from './enums/sandwich-type';

export class BuilderFactory {
    // Factory Method
    public static getBuilder(sandwichType: SandwichType): SandwichBuilder {
        if (sandwichType == SandwichType.CLUB)
            return new ClubSandwichBuilder();

        if (sandwichType == SandwichType.MONTECRISTO)
            return new MonteCristoSandwichBuilder();
        
        return new RoyalSandwichBuilder();
    }
}