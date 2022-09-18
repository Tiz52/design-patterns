import { TiktokAPI } from './tiktok-api';
import { InstragramAPI } from './instragram-api';
import { FacebookAPI } from './facebook-api';

export class SocialNetworkFacade {
    protected tiktokAPI: TiktokAPI;
    protected instragramAPI: InstragramAPI;
    protected facebookAPI: FacebookAPI;

    constructor() {
        this.tiktokAPI = new TiktokAPI();
        this.instragramAPI = new InstragramAPI();
        this.facebookAPI = new FacebookAPI();
    }

    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.tiktokAPI.operation1();
        result += this.instragramAPI.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.tiktokAPI.operationN();
        result += this.instragramAPI.operationN();
        return result;
    }

    public publishOnAllSocialNetworks() {
        let result = 'Facade social networks\n';
        result += this.tiktokAPI.publish();
        result += this.instragramAPI.publish();
        result += this.facebookAPI.publish();
        return result;
    }
}