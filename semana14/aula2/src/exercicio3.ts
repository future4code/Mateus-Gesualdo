enum AGES {
    PRE = 'Pré-história',
    ANCIENT = 'Idade Antiga',
    MIDDLE = 'Idade Média',
    MODERN = 'Idade Moderna',
    CONTEMPORARY = 'Idade Contemporânea'
}

function determineHistoricalAge(
    year: number,
    reference: string 
): AGES {
    if (reference === 'AC') {
        if (year > 4000) {
            return AGES.PRE
        } else {
            return AGES.ANCIENT
        }
    } else if (year < 476) {
        return AGES.ANCIENT
    } else if (year < 1453) {
        return AGES.MIDDLE
    } else if (year < 1789) {
        return AGES.MODERN
    } else {
        return AGES.CONTEMPORARY
    }
}

let year: number = Number(process.argv[2]),
    reference: string = process.argv[3]

if (year >= 0 && (reference === 'AC' || reference === 'DC') ) {
    console.log( determineHistoricalAge( year, reference ) )
} else {
    console.log("Error: Bad parameters")
}