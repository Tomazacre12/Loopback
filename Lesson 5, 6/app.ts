function LoggerAndReturn<T>(thing: T) : T {
    return thing
}

const message: string = LoggerAndReturn('Hello World')
const message2: number = LoggerAndReturn(2)
console.log(message)
console.log(message2)

function getArray<C>(items: C[]): C[]{
    return new Array<C>().concat(items)
}

let myNumArr = getArray([100, 200, 300])
let myStrArr = getArray(['Hello', 'World'])

console.log(myNumArr)
console.log(myStrArr)