type numberSetInfo = {
    length: number,
    oddNumbers: number,
    sum: number
}

function generateInfo(numbers: number[]): numberSetInfo {

    let oddNumbers: number = 0,
        sum: number = 0
        
    for (let number of numbers){
        sum += number
        if (number % 2 === 1) oddNumbers ++
    }
    return {
        length: numbers.length,
        oddNumbers,
        sum
    }
}

// *** TESTE *** //

console.log( generateInfo( [1,2,3,4,5] ) )