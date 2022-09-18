import {FlyweightFactory} from "./flyweight-factory";

function clientCode() {
    
    //CarFlyweight => intrinsic/shared state => brand + model + color

    const factory = new FlyweightFactory([
        ['Toyota', 'Land Crouiser Prado', 'black'],
        ['Mercedes Benz', 'C300', 'black'],
        ['Mercedes Benz', 'C500', 'red'],
        ['BMW', 'M5', 'red'],
        ['BMW', 'X6', 'white']
    ]);
    factory.listFlyweights();
    addCarToPoliceDatabase(factory, 'ARXTQY1', 'Pedro', 'Toyota', 'Land Crouiser Prado', 'white');
    addCarToPoliceDatabase(factory, 'PE00001', 'Juan Pérez', 'Toyota', 'Land Crouiser Prado', 'red');
    addCarToPoliceDatabase(factory, 'PE00002', 'Juan Pérez', 'Toyota', 'Land Crouiser Prado', 'blue');
    addCarToPoliceDatabase(factory, 'PE00003', 'Rodrigo', 'Toyota', 'Land Crouiser Prado', 'black');
    factory.listFlyweights();
}

function addCarToPoliceDatabase(flyweightFactory: FlyweightFactory, plates: string, owner: string, brand: string, model: string, color: string,) {
    console.log('\nClient: Verifying if adding a car to database.');
    const flyweight = flyweightFactory.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}

clientCode();