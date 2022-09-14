function LoggerAndReturn(thing) {
    return thing;
}
var message = LoggerAndReturn('Hello World');
var message2 = LoggerAndReturn(2);
console.log(message);
console.log(message2);
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
console.log(myNumArr);
console.log(myStrArr);
