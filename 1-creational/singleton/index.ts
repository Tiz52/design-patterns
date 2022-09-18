import { FileLogger } from "./file-logger";

function clientCode() {
    const s1: FileLogger = FileLogger.getInstance();
    const s2: FileLogger = FileLogger.getInstance();
    if (s1 === s2) {
        s1.log('Singleton works, both variables contain the same instance.');
    } else {
        s2.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();