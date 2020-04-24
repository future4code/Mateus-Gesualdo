function itemA(num: number, i: number = 0) {
    console.log(i)

    if (i < num) {
        itemA(num, i + 1)
    }
}

function itemB(num: number, i: number = 0) {
    if (i < num) {
        itemB(num, i + 1)
    }

    console.log(i)
}