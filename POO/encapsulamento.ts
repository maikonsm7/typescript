export class RemoteControl {
    constructor(private powerStatus: boolean = false) {}

    public turnOn(): void {
        this.powerStatus = true;
        console.log('Remote is turned ON');
    }

    public turnOff(): void {
        this.powerStatus = false;
        console.log('Remote is turned OFF');
    }

    public status(): boolean {
        return this.powerStatus;
    }
}

const remote1 = new RemoteControl();
console.log(`Initial Power Status: ${remote1.status()}`); // Initial Power Status: false
remote1.turnOn();  // Remote is turned ON
remote1.turnOff(); // Remote is turned OFF