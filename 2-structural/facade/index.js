"use strict";
exports.__esModule = true;
var social_network_facade_1 = require("./social-network-facade");
function clientCode() {
    var facade = new social_network_facade_1.SocialNetworkFacade();
    console.log(facade.operation());
    console.log(facade.publishOnAllSocialNetworks());
}
clientCode();
