const btn = document.querySelector('.header__btn')

btn.addEventListener( 'click',()=>{
    const nav = document.querySelector('.header__navigation')
    nav.classList.toggle('active')
})