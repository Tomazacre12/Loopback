function log(title: string){
    return function(target, key, descriptor){
        console.log(target)
        const original = descriptor.value
        descriptor.value = function(...args: any[]){
            const result = original.apply(this, args)
            console.log(`title: ${title} ${key} with args ${JSON.stringify(args)} returned
            ${JSON.stringify(result)}`)
            return result
        }
        return descriptor
    }
}

class Calculator {
    @log('Calculator')
    square(n: number){
        return n * n
    }
}

const calculator = new Calculator()
calculator.square(2)
calculator.square(3)
