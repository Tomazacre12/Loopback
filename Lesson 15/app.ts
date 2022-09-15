function property(target: any, key: string){
    let value = target[key]
    const getter = function(){
        console.log(`Getter for ${key} returned ${value}`)
        return value
    }
    const setter = function(newVal){
        console.log(`set ${key} to ${newVal}`)
        value = newVal
    }
    const isDeleted = delete this[key]
    if (isDeleted){
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}
class Person {
    @property
    public firstName: string
}
const person = new Person()
person.firstName = 'Haider'
console.log(person.firstName)
