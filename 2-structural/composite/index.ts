import {FolderComponent} from "./composite/folder-component";
import {FileComponent} from "./leaf/file-component";
import {FileSystemComponent} from "./component/file-system-component";

function clientCode() {
    let mainFolder: FileSystemComponent = new FolderComponent("Year2022");
    
    let subFolder1: FileSystemComponent = new FolderComponent("Jun2022");
    let subFolder2: FileSystemComponent = new FolderComponent("Jul2022");

    mainFolder.addComponent(subFolder1);
    mainFolder.addComponent(subFolder2);

    let folder1File1: FileSystemComponent = new FileComponent("Jun1DataFile.txt", 1000);
    let folder1File2: FileSystemComponent = new FileComponent("Jun2DataFile.txt", 1500);
    let folder1File3: FileSystemComponent = new FileComponent("Jun3DataFile.txt", 2000);

    subFolder1.addComponent(folder1File1);
    subFolder1.addComponent(folder1File2);
    subFolder1.addComponent(folder1File3);

    let folder2File1: FileSystemComponent = new FileComponent("Jul1DataFile.txt", 500);
    let folder2File2: FileSystemComponent = new FileComponent("Jul2DataFile.txt", 500);

    subFolder2.addComponent(folder2File1);
    subFolder2.addComponent(folder2File2);

    console.log("Main Folder: " + mainFolder.getName() + " ** Size=" + mainFolder.getComponentSize() + "Kb");
    console.log(" SubFolder1: " + subFolder1.getName() + " ** Size=" + subFolder1.getComponentSize() + "Kb");
    console.log("   File1 in SubFolder1: " + folder1File1.getName() + " ** Size=" + folder1File1.getComponentSize() + "Kb");
    console.log("   File2 in SubFolder1: " + folder1File2.getName() + " ** Size=" + folder1File2.getComponentSize() + "Kb");
    console.log("   File3 in SubFolder1: " + folder1File3.getName() + " ** Size=" + folder1File3.getComponentSize() + "Kb");
    console.log(" SubFolder2: " + subFolder2.getName() + " ** Size=" + subFolder2.getComponentSize() + "Kb");
    console.log("   File1 in SubFolder2: " + folder2File1.getName() + " ** Size=" + folder2File1.getComponentSize() + "Kb");
    console.log("   File2 in SubFolder2: " + folder2File2.getName() + " ** Size=" + folder2File2.getComponentSize() + "Kb");
}

clientCode();