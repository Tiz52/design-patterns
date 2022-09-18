// Component
export abstract class Pizza {
    protected description: string;
    public abstract getDescription(): string;
    public abstract calculateCost(): number;
}