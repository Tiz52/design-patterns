import {ConcreteSubject} from "./concrete/concrete-subject";
import {ConcreteObserverB} from "./concrete/concrete-observer-b";
import {ConcreteObserverA} from "./concrete/concrete-observer-a";
import {Subject} from "./abstract/subject";
import {Observer} from "./abstract/observer";
import {ConcreteObserverC} from "./concrete/concrete-observer-c";

export class Client {
    public execute(): void {
        const subject: ConcreteSubject = new ConcreteSubject();

        const observerA: Observer = new ConcreteObserverA();
        const observerB: Observer = new ConcreteObserverB();
        const observerC: Observer = new ConcreteObserverC();

        subject.attach(observerA);
        subject.attach(observerB);
        subject.attach(observerC);

        subject.setState();

        subject.detach(observerA);
        subject.detach(observerB);
        //subject.detach(observerC);
        subject.setState();
    }
}

const client: Client = new Client();
client.execute();