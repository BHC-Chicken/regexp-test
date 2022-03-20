const str = `
010-1234-5678
test@samole.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Quick brown fox jumps over the lazy dog.
abbcccdddd
d`

// const regexp = new RegExp('the', 'gi')
console.log(
    str.match(/^t/gim)
    )