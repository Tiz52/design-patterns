import {Prototype} from "./prototype";
import {CircularReference} from "./circular-reference";
import { User } from "./user";
import { UserId } from "./user-id";
import { UserPreference } from './user-preference';

function clientCode1() {
    
    const original: Prototype = new Prototype();
    original.primitive = 245;
    original.component = new Date();
    original.circularReference = new CircularReference(original);
    
    //const copy: Prototype = original.shallowCopy();
    
    const copy: Prototype = original.deepCopy();
    
    if (original === copy) {
        console.log('Same object reference.');
    } else {
        console.log('Different object reference.');
    }
    if (original.component === copy.component) {
        console.log('Simple component has NOT been cloned.');
    } else {
        console.log('Simple component has been cloned, different object reference.');
    }
    if (original.circularReference === copy.circularReference) {
        console.log('Component with back reference has NOT been cloned.');
    } else {
        console.log('Component with back reference has been cloned, different object reference.');
    }
    if (original.circularReference.prototype === copy.circularReference.prototype) {
        console.log('Component with back reference is linked to original object.');
    } else {
        console.log('Component with back reference is linked to the clone, different object reference.');
    }
}

function clientCode2() {
    const userOriginalPrototype: User = new User();
    
    userOriginalPrototype.id = new UserId(1);
    userOriginalPrototype.email = 'test@upc.edu.pe';
    userOriginalPrototype.preference = 
        new UserPreference(userOriginalPrototype);
    
    //const userCopy: User = userOriginalPrototype.shallowCopy();
    
    const userCopy: User = userOriginalPrototype.deepCopy();
    
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