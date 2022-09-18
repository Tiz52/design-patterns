export class CarFlyweight {
    //brand + model + color
    private readonly intrinsicState: any; // Se puede compartir

    constructor(intrinsicState: any) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState): void { // plates, owner (no se puede compartir, es único)
        const sharedState = JSON.stringify(this.intrinsicState); //intrinsic
        const uniqueState = JSON.stringify(extrinsicState); //extrinsic
        console.log(`*** Flyweight: Displaying shared (${sharedState}) and unique (${uniqueState}) state.`);
    }
}