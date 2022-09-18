import {Observer} from "../abstract/observer";
import {Subject} from "../abstract/subject";
import {ConcreteSubject} from "./concrete-subject";

export class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        //if ((subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        //}
    }
}