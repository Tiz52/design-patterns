export abstract class FileSystemComponent {
    protected name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    public addComponent(component: FileSystemComponent): void {
    }

    public getComponent(componentNum: number): FileSystemComponent {
        return this;
    }

    public abstract getComponentSize(): number;

    public getName(): string {
        return this.name;
    }
}