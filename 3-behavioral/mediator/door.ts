export class Door {
    private isOpen: boolean = false;
    private readonly location: string = "";

    constructor(location: string) {
        this.location = location;
    }

    public getIsOpen(): boolean {
        return this.isOpen;
    }

    public toggle(): void {
        if (this.isOpen) {
            this.close();
            this.isOpen = false;
        } else {
            this.open();
            this.isOpen = true;
        }
    }

    public open(): void {
        console.log(this.location + " Door open");
    }

    public close(): void {
        console.log(this.location + " Door close");
    }
}