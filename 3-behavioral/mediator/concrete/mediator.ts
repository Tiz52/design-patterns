import {Light} from "../light";
import {Door} from "../door";
import {MyWindow} from "../window";

export class Mediator {
    private lights: Light[] = [];
    private doors: Door[] = [];
    private windows: MyWindow[] = [];

    public registerLight(light: Light): void {
        this.lights.push(light);
    }

    public registerDoor(door: Door): void {
        this.doors.push(door);
    }

    public registerWindow(window: MyWindow): void {
        this.windows.push(window);
    }

    public turnOnAllLights(): void {
        for (let light of this.lights) {
            if (!light.getIsOn()) {
                light.toggle();
            }
        }
    }

    public turnOffAllLights(): void {
        for (let light of this.lights) {
            if (light.getIsOn()) {
                light.toggle();
            }
        }
    }

    public openAllDoors(): void {
        for (let door of this.doors) {
            if (!door.getIsOpen()) {
                door.toggle();
            }
        }
    }

    public closeAllDoors(): void {
        for (let door of this.doors) {
            if (door.getIsOpen()) {
                door.toggle();
            }
        }
    }

    public openAllWindows(): void {
        for (let window of this.windows) {
            if (!window.getIsOpen()) {
                window.toggle();
            }
        }
    }

    public closeAllWindows(): void {
        for (let window of this.windows) {
            if (window.getIsOpen()) {
                window.toggle();
            }
        }
    }
}