function capitalizeWords(string) {
    return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(capitalizeWords('это предложение из заглавных букв каждого слова'));