import { Button } from "../abstract/button";

export class LinuxButton implements Button {
    public onClick(): void {
        console.log('LinuxButton onClick');
    }

    public render(): void {
        console.log('LinuxButton render');
    }
}