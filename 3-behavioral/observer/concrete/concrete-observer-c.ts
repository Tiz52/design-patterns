import {Observer} from "../abstract/observer";
import {Subject} from "../abstract/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverC implements Observer {
    public update(subject: Subject): void {
        console.log('ConcreteObserverC: Reacted to the event.');
    }
}