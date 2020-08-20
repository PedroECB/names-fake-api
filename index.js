const faker = require('faker');
const axios = require('axios');
const { fake } = require('faker');
const urlAPI = 'http://localhost:3000'

function Person(id, name, date, email, city, code, country){
    return {
        id: id,
        name: name,
        birthDate: date,
        email: email,
        city: city,
        zipCode: code,
        country: country
    }
}

 function generateUsers(){
    try{
        for(let i= 0; i < 20; i++){
            let person = new Person(
                    faker.random.number(),
                    faker.name.firstName(),
                    faker.date.past().toLocaleDateString(),
                    faker.internet.email(),
                    faker.address.city(),
                    faker.address.zipCode(),
                    faker.address.country()
                 )

                postUser(person)
         }
    }catch(error){
        console.log(error)
    }
}

const postUser =  async function (p){
    const result = await axios.post(`${urlAPI}/persons`, p)
                 .then((response)=> {
                     return response
                     })
                 .catch((error)=> {
                     return error
                    })
}


 generateUsers()
// .then((response)=>{
//     console.log('Dados da api')
//     axios.get(`${urlAPI}/persons`)
//     .then((response)=>{
//         console.log(response.data)

//     }).catch((error)=>{
//         console.log('Falha na matrix KJJKK')
//     })
// })


