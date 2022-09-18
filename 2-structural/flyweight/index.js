"use strict";
exports.__esModule = true;
var flyweight_factory_1 = require("./flyweight-factory");
function clientCode() {
    //CarFlyweight => intrinsic/shared state => brand + model + color
    var factory = new flyweight_factory_1.FlyweightFactory([
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
function addCarToPoliceDatabase(flyweightFactory, plates, owner, brand, model, color) {
    console.log('\nClient: Verifying if adding a car to database.');
    var flyweight = flyweightFactory.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
clientCode();
