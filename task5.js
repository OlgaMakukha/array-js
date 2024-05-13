const string = 'Я так сильно люблю программировать';

const stringToArray = string.split(' ');
stringToArray.forEach(item => {
    console.log(item.length);
});
