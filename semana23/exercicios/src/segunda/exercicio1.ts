function checkOneEdit(referenceText: string, comparedText: string): boolean {
    while (
        referenceText &&
        referenceText[0] === comparedText[0]
    ) {
        referenceText = referenceText.slice(1)
        comparedText = comparedText.slice(1)
    }
    return (
        comparedText.slice(1) === referenceText ||
        comparedText === referenceText.slice(1) ||
        comparedText.slice(1) === referenceText.slice(1)
    )
}