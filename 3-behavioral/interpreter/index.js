"use strict";
exports.__esModule = true;
exports.Client = void 0;
var terminal_expression_1 = require("./concrete/terminal-expression");
var and_expression_1 = require("./concrete/and-expression");
var or_expression_1 = require("./concrete/or-expression");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        //let context: string = "Lions";
        //let context: string = "Lions Tigers";
        var context = "Lions Bears";
        //let context: string = "Tigers Bears";
        var expression = this.buildInterpreterTree();
        console.log(context + " is " + expression.interpret(context));
    };
    Client.prototype.buildInterpreterTree = function () {
        var terminal1 = new terminal_expression_1.TerminalExpression("Lions"); //t
        var terminal2 = new terminal_expression_1.TerminalExpression("Tigers"); //t
        var terminal3 = new terminal_expression_1.TerminalExpression("Bears"); //f
        var alternation1 = new and_expression_1.AndExpression(terminal2, terminal3); //f
        var alternation2 = new or_expression_1.OrExpression(terminal1, alternation1); //t
        return new and_expression_1.AndExpression(terminal3, alternation2); //f
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
