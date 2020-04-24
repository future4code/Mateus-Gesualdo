function printArray(
    array: string[] | number[] | boolean[],
    index: number = 0
): void {

    console.log(array[index])

    if (index < array.length - 1) {
        printArray(array, index + 1)
    }
}