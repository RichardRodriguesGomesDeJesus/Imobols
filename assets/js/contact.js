const url = new URL(window.location)
const id = url.searchParams.get('id')
const form = document.querySelector('.contact__form')

form.addEventListener('submit',(event) => {
    event.preventDefault()
    window.location.href = './success.html'
})