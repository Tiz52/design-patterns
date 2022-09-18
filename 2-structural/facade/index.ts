import {SocialNetworkFacade} from "./social-network-facade";

function clientCode() {
    const facade = new SocialNetworkFacade();
    console.log(facade.operation());
    console.log(facade.publishOnAllSocialNetworks());
}

clientCode();