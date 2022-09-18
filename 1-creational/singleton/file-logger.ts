export class FileLogger {
    private static instance: FileLogger;

    private constructor() { }

    public static getInstance(): FileLogger {
        if (!FileLogger.instance) {
            FileLogger.instance = new FileLogger();
        }
        return FileLogger.instance;
    }

    public log(message: String) {
        console.log(message);
    }
}