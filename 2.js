// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
//     let arr = [12, 15, 35, 20, 30, 50, 1, 4, 67, 24, 33, 90, 157, 57, 34, 10, 5, 18, 9, 6]
//     arr.sort((a, b) => a - b);
//     console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let arr = [12, 15, 35, 20, 30, 50, 1, 4, 67, 24, 33, 90, 157, 57, 34, 10, 5, 18, 9, 6]
// arr.sort((a, b) => b - a);
// console.log(arr);




// -- при помощи filter получить числа кратные 3
// let arr = [15,10,18,6,4,8]
// let result = arr.filter(elem => elem % 3 == 0);
// console.log(result);



// -- при помощи filter получить числа кратные 10
//  let arr = [15,10,100,6,9,300,500,1,54]
// let result = arr.filter(elem => elem % 10 == 0);
//  console.log(result);


// -- перебрать (проитерировать) массив при помощи foreach()
// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// arr.forEach(function(elem) {
//     console.log(elem);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arr = [1,4,6,7,3];
// let result = arr.map(function (a, b) {
//     return a * 3;
// });
// console.log(result);


//
// - создать массив со словами на 15-20 элементов.
// let arr = ["Cat","Fruit","Grace","Pineapple","Finn","Day","Orange","Mike","Ball","Shine"]
// // -- отсортировать его по алфавиту в восходящем порядке.
// arr.sort(function (a,b){
//     if(a < b) {
//         return -1;
//     }
//     else {
//         return 1;
//     }
// });
// console.log(arr)

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let arr = ["Cat","Fruit","Grace","Pineapple","Finn","Day","Orange","Mike","Ball","Shine"]
// arr.sort(function (a,b){
//     if(b < a) {
//         return -1;
//     }
//     else {
//         return 1
//     }
// });
// console.log(arr);


// -- отфильтровать слова длиной менее 4х символов
// let arr = ["Cat","Fruit","Grace","My","Finn","Day","Orange","Mike","Ball","Shine"]
// let result = arr.filter(arr => arr.length < 4);
//
// console.log(result);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
//let arr = [1,4,6,3,7,4];
// let result = arr.map(function (elem){
//     return elem + '!';
// });
// console.log(result)


//***********************************************************************8
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
//


    // let users = [ {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return 1
//     }
//     return -1
// })
// console.log(result);

// Спадання

// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return -1
//     }
//     return 1
// })
// console.log(result)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return 1
//     }
//     return -1
// })
// console.log(result);

// Зростання

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return -1
//     }
//     return 1
// })
// console.log(result);

// Спадання

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//  та зберегти це в новий масив (первинний масив залишиться без змін)

// let xxx = JSON.stringify(users);
// let abc = JSON.parse(xxx);

// let result = abc.map(function (elem, index) {
//   elem.id = (index+1);
//   return elem;
// })
// console.log(result);

// - відсортувати його за індентифікатором



// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// -- написать функцию калькулятора с 2мя числами и колбеком

// function doHomework(num1, num2, callback) {
//     alert(`Starting function sum of ${num1} and ${num2}`);
//     callback();
//   }

//   doHomework(num1 = 1, num2 = 2, function() {
//     let result = num1 + num2;
//     alert(`Finished my function. Result = ${result}`);
//   });

// -- наисать функцию калькулятора с 3мя числами и колбеком

//   function doHomework(num1, num2, num3, callback) {
//     alert(`Starting function sum of ${num1},${num2} and ${num3}`);
//     callback();
//   }

//   doHomework(num1 = 1, num2 = 2, num3 = 3, function() {
//     let result = num1 + num2 + num3;
//     alert(`Finished my function. Result = ${result}`);
//   });


