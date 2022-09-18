"use strict";
exports.__esModule = true;
var prototype_1 = require("./prototype");
var circular_reference_1 = require("./circular-reference");
var user_1 = require("./user");
var user_id_1 = require("./user-id");
var user_preference_1 = require("./user-preference");
function clientCode1() {
    var original = new prototype_1.Prototype();
    original.primitive = 245;
    original.component = new Date();
    original.circularReference = new circular_reference_1.CircularReference(original);
    //const copy: Prototype = original.shallowCopy();
    var copy = original.deepCopy();
    if (original === copy) {
        console.log('Same object reference.');
    }
    else {
        console.log('Different object reference.');
    }
    if (original.component === copy.component) {
        console.log('Simple component has NOT been cloned.');
    }
    else {
        console.log('Simple component has been cloned, different object reference.');
    }
    if (original.circularReference === copy.circularReference) {
        console.log('Component with back reference has NOT been cloned.');
    }
    else {
        console.log('Component with back reference has been cloned, different object reference.');
    }
    if (original.circularReference.prototype === copy.circularReference.prototype) {
        console.log('Component with back reference is linked to original object.');
    }
    else {
        console.log('Component with back reference is linked to the clone, different object reference.');
    }
}
function clientCode2() {
    var userOriginalPrototype = new user_1.User();
    userOriginalPrototype.id = new user_id_1.UserId(1);
    userOriginalPrototype.email = 'test@upc.edu.pe';
    userOriginalPrototype.preference =
        new user_preference_1.UserPreference(userOriginalPrototype);
    //const userCopy: User = userOriginalPrototype.shallowCopy();
    var userCopy = userOriginalPrototype.deepCopy();
    if (userOriginalPrototype === userCopy)
        console.log('Original and Copy/Clone have the same memory address');
    else
        console.log('Original and Copy/Clone have different memory address');
    if (userOriginalPrototype.id === userCopy.id)
        console.log('Same memory address, the ID has not been cloned');
    else
        console.log('Different memory address, the ID has been cloned');
    if (userOriginalPrototype.preference === userCopy.preference)
        console.log('Same memory address, the preference has not been cloned');
    else
        console.log('Different memory address, the preference has been cloned');
    if (userOriginalPrototype.preference.user === userCopy.preference.user)
        console.log('Same memory address, the user preference has not been cloned');
    else
        console.log('Different memory address, the user preference has been cloned');
}
//clientCode1();
clientCode2();
