// multiple type varibles
function getInfo<T, U>(id: T, name: U): void {
    console.log(typeof id + ', ' + typeof name, 'getInfo')
}

getInfo<number, string>(1, 'jane')

function dislayType<T>(id: T, name: string): void{
    console.log( typeof id + ', ' + typeof name)
}

dislayType<number>(2, 'Malik')