function compress(word: string): string {

    const charCount: { [index: string]: number } = {}

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            charCount[word[i]]++
        } else {
            charCount[word[i]] = 1
        }
    }

    let compressedWord = ''

    for (const key in charCount) {
        compressedWord += key + charCount[key]
    }

    return (compressedWord.length > word.length) ? word : compressedWord
};