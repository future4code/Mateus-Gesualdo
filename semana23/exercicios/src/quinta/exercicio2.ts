function sumIntegersUpTo(num: number): number {
    if (num <= 1) return 1

    const sum = num + sumIntegersUpTo(num - 1)

    return sum
}