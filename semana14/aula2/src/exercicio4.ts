enum CATEGORIES {
    SUMMER = 'Summer',
    WINTER = 'Winter',
    BATHING = 'Bathing',
    UNDERWEAR = 'Underwear'
}

type product = {
    name: string,
    price: number,
    blackFridayPrice: number | undefined,
    category: CATEGORIES
}

let products: product[] = [
    {
        name: 'first product',
        price: 1000,
        blackFridayPrice: undefined,
        category: CATEGORIES.SUMMER
    },
    {
        name: 'second product',
        price: 2000,
        blackFridayPrice: undefined,
        category: CATEGORIES.WINTER
    },
    {
        name: 'third product',
        price: 100,
        blackFridayPrice: undefined,
        category: CATEGORIES.BATHING
    },
    {
        name: 'fourth product',
        price: 200,
        blackFridayPrice: undefined,
        category: CATEGORIES.UNDERWEAR
    },

]
function calculateBlackFridayPrices(products: product[]): product[] {
    const updatesProducts: product[] = products.map(
        product => {
            switch (product.category) {
                case CATEGORIES.SUMMER:
                    product.blackFridayPrice = 0.95 * product.price
                    return product
                case CATEGORIES.WINTER:
                    product.blackFridayPrice = 0.9 * product.price
                    return product
                case CATEGORIES.BATHING:
                    product.blackFridayPrice = 0.96 * product.price
                    return product
                case CATEGORIES.UNDERWEAR:
                    product.blackFridayPrice = 0.93 * product.price
                    return product
            }
        }
    )

    return updatesProducts
}

// *** TESTE *** //

console.log( calculateBlackFridayPrices( products ) )