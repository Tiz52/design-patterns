import {Observer} from "../abstract/observer";
import {Subject} from "../abstract/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        //if (subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        //}
    }
}