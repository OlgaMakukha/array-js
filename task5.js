const string = 'Я так сильно люблю программировать';

// выводит длину каждого слова в строке при помощи метода перебора
const stringToArray = string.split(' ');
stringToArray.forEach(item => {
    console.log(item.length);
});




// выводит длину каждого слова при помощи метода преобразования
// const stringLength = (string.split(' ').map(item => item.length));
// console.log(stringLength);
