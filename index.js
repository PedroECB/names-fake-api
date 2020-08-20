const faker = require('faker');

function Person(name, date, email, city, cep, country){
    return {
        name: name,
        date: date,
        email: email,
        city: city,
        cep: cep,
        country: country
    }
}


let pessoa = new Person(
    'Pedro Henrique',
    '09/06/1997',
    'pedrosophbc@gmail.com',
    'Salvador',
    '41387-180',
     'Brasil'
)

for(let i= 0; i < 10; i++){
    console.log(new Person(
            faker.name.firstName(),
            faker.date.past().toLocaleDateString(),
            faker.internet.email(),
            faker.address.city(),
            faker.address.zipCode(),
            faker.address.country()
        ))
}


console.log(pessoa)


// console.log(new Pessoa())