const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduceAll = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {
        myLi += `
        <li>
        <img src="${product.src}" alt="${product.name}">
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
        </li>
    `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map( (product) => {
        return {
        //Spread operator
        ...product,
        price: product.price * 0.9
    }
    })

    showAll(newPrices)
}

function valueTotal() {
    const valueTotal = menuOptions.reduce((acc, product) => acc + product.price, 0)

    list.innerHTML =`
        <li>
        <p>O preço total dos produtos é R$ ${valueTotal.toFixed(2)}</p>
        <p class="item-price
    `

}

function isVegan() {
    const veganProducts = menuOptions.filter(product => product.vegan)

    showAll(veganProducts)
    
}