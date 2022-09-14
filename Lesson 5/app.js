function LoggerAndReturn(thing) {
    return thing;
}
var message = LoggerAndReturn('Hello World');
var message2 = LoggerAndReturn(2);
console.log(message);
console.log(message2);
