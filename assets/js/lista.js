const ListHouses = document.querySelector('.showcase__apartment')
const list = async ()=>{
    try {
        const resposta = await fetch(`http://localhost:3000/apartments`)
        if (resposta.ok) {
            return await resposta.json()
        }
    } catch (error) {
        window.location.href = './assets/pages/error.html'
    }
    
    
}
list()
.then(list =>{
    const existe = ListHouses  == document.querySelector('[data-js="showcase--home"]')
    if (existe) {
        for (let i = 0; i < 4; i++) {
            const element = list[i];
            const newCard = document.createElement("a")
            const conteudo = `
                <p class="showcase__apartment___card____value">${element.preco}</p>
                <p class="showcase__apartment___card____description">${element.local}</p>`
            newCard.innerHTML =  conteudo
            newCard.href = `assets/pages/contato__proprietario.html?id=${element.id}`
            newCard.id = `apartment-${element.id}`
            newCard.classList.add('showcase__apartment___card')
            newCard.style.background = `url(assets/${element.img}) center / cover no-repeat`
            ListHouses.appendChild(newCard)
        }
    }else(
        list.forEach(item => {
            const newCard = document.createElement("a")
            const conteudo = `
                <p class="showcase__apartment___card____value">${item.preco}</p>
                <p class="showcase__apartment___card____description">${item.local}</p>`
            newCard.innerHTML =  conteudo
            newCard.href = `./contato__proprietario.html?id=${item.id}`
            newCard.id = `apartment-${item.id}`
            newCard.classList.add('showcase__apartment___card')
            newCard.style.background = `url(../${item.img}) center / cover no-repeat`
            ListHouses.appendChild(newCard)
        })
    )
   
})
