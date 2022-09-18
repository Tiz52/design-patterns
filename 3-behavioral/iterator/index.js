"use strict";
exports.__esModule = true;
exports.Client = void 0;
var words_aggregate_1 = require("./concret/words-aggregate");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var words = new words_aggregate_1.WordsAggregate();
        words.addItem('First');
        words.addItem('Second');
        words.addItem('Third');
        var iterator = words.createIterator();
        console.log('Straight traversal:');
        while (iterator.valid()) {
            console.log(iterator.next());
        }
        console.log('');
        console.log('Reverse traversal:');
        var reverseIterator = words.createReverseIterator();
        while (reverseIterator.valid()) {
            console.log(reverseIterator.next());
        }
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
