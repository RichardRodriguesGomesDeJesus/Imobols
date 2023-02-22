
const form = document.querySelector('.apartment__form') 
const main = document.querySelector('main') 

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const msg = event.target.dataset.js('menssege').value
    const name = event.target.dataset.js('name').value
    const tel =  event.target.dataset.js('tel').value
    const email =   event.target.dataset.js('email').value
    submitOrder(name,tel,email,msg) 
})
function submitOrder(name,tel,email,msg) {
    fetch('http://apartamentos-aatalogo-imobols.vercel.app/orders-apartments',
    {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
         },
         body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            msg: msg
         })
    })
    .then( response =>{
        if (response.ok) {
            
        }
        throw new Error('Não foi possivel se comunicar com o servidor')
    } )
}