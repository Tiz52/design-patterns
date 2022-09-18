export class Light {
    private isOn: boolean = false;
    private readonly location: string = "";

    constructor(location: string) {
        this.location = location;
    }

    public getIsOn(): boolean {
        return this.isOn;
    }

    public toggle(): void {
        if (this.isOn) {
            this.off();
            this.isOn = false;
        } else {
            this.on();
            this.isOn = true;
        }
    }

    public on(): void {
        console.log(this.location + " Light switched on.");
    }

    public off(): void {
        console.log(this.location + " Light switched off.");
    }
}