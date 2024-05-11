const arr = ['JavaScript', '-', 'мультипарадигменный', 'язык', 'программирования', 'с', 'динамической', 'типизацией'];

// первый способ
function arrayToString(arr) {
    return arr.join(' ');
}

console.log(arrayToString(arr));



// второй способ
// function arrayToString(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue + ' ';
//     }, '');
// }

// const result = arrayToString(arr);
// console.log(result);



// третий способ (в качестве разделителя запятая)
// function arrayToString(arr) {
//     return arr.toString();
// }

// console.log(arrayToString(arr));
