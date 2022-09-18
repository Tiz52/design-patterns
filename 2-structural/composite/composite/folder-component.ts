import {FileSystemComponent} from "../component/file-system-component";

// Composite
export class FolderComponent extends FileSystemComponent {
    protected folderContent: FileSystemComponent[] = [];

    constructor(name: string) {
        super(name);
    }

    public addComponent(fileSystemComponent: FileSystemComponent): void {
        this.folderContent.push(fileSystemComponent);
    }

    public getComponent(location: number): FileSystemComponent {
        return this.folderContent[location];
    }

    public getComponentSize(): number {
        let sizeOfAllFiles: number = 0;
        for (const child of this.folderContent) {
            sizeOfAllFiles = sizeOfAllFiles + (child.getComponentSize());
        }
        return sizeOfAllFiles;
    }
}