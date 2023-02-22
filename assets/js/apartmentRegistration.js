const Name = document.querySelector('[data-js="name"]')
const email =  document.querySelector('[data-js="email"]')
const number = document.querySelector('[data-js="number"]')
const building  = document.querySelector('[data-js="building"]')
const apartmentNumber = document.querySelector('[data-js="apartmentNumber"]')
const rent = document.querySelector('[data-js="rent"]')
const photos = document.querySelector('[data-js="photos"]')
const cep  = document.querySelector('[data-js="cep"]')
const city  = document.querySelector('[data-js="city"]')
const locality = document.querySelector('[data-js="locality"]')
const street = document.querySelector('[data-js="street"]')
const uf = document.querySelector('[data-js="uf"]')

const form = document.querySelector('[data-form="form"]')
cep.addEventListener("blur" ,(event)=>{
    event.preventDefault()
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then( serverResponse =>{
        console.log(JSON.stringify(serverResponse))
        if (serverResponse.ok) {
            return serverResponse.json()
        }
        throw new Error('Não foi possivel se comunicar com o servidor')

        
    })
    .then(data =>{
        city.value = data.localidade
        locality.value = data.bairro
        street.value = data.logradouro
        uf.value = data.uf
    })
    .finally()
})
form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    fetch(`https://apartamentos-aatalogo-imobols.vercel.app/apartments`,
    {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
         },
         body: JSON.stringify({
            id: '' ,
            img: photos.value,
            preco: rent.value,
            local:uf.value
         })
    })
    window.location.href = './success.html'
})



