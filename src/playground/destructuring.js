const person = {
    name: 'Purti',
    age: 26,
    location: {
        city: 'Delhi',
        temp: 32
    }
}

const {name, age} = person

console.log(`${name} is ${age}`)

const { city, temp } = person.location

console.log(`Its ${temp} in ${city}`)