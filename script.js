/// строка проверить строку на наличие . и после нее на com или ru///
// function checkString (str) {
//     if(str.includes('.')){
//         if (str.includes('com') || str.includes('ru')){
//             return str
//         }else {
//             return 'not found "com" or "ru"  in string'
//         }
//         }else {
//         return 'not found " . " in string'
//     }
// }
// console.log(checkString('twitter.com'))


////////////////////////////////////////////////////////////////////////////////////////
/// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4///
// function checkString(str){
//    return str.split(' ').map(el => el.length % 2 === 0 && el.length <= 8 && el.length >=4)
// }
// console.log(checkString('lorem ipsum dolor sit amet'))

///2-й вариант решения c 'filter':
// function checkString(str){
//    let result = str.split(' ').filter((el) => {
//         if(el.length % 2 === 0 && el.length <= 8 && el.length >=4){
//             return el
//         }
//     }).join(' ')
//     return result
// }
// console.log(checkString('lorem ipsum dolor sit amet'))
////////////////////////////////////////////////////////////////////////
///строка поменять букву каждого четного индекса на E можно решить через map///
// function checkIndex(str){
//    return str.split('').map((el, idx) => idx % 2 === 0 ? el.replace(el, 'E') : el ).join('')
// }
// console.log(checkIndex('hello world'))

//////////////////////////////////////////////////////////////////////////
/// строка1 строка2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function checkPsw(psw, password) {
//     psw.trimStart()
//     if (password === psw) {
//         return 'true'
//     }
// }
// console.log(checkPsw('qwerty', 'qwerty'))

//не совсем поняла trim. думаю решила не правильно//

////////////////////////////////////////////////////////////////////////////////////////////
//FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

// const array = new Array(100).fill(1)
// console.log(array.map((el, idx) => el + idx).map(el => {
//     if (el % 15 === 0) {
//         return 'FizzBuzz'
//     } else if ( el % 3 === 0){
//         return 'Fizz'
//     } else if (el % 5 === 0){
//         return 'Buzz'
//     } else {
//         return el
//     }
// }))
///

//////////////////////////////////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]///

// let array=['lorem', 'ipsum', 'dolor', 'sit']
//
// console.log(array.map(el=>el.length))

/////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor'] => [1,2,3]///

// let array=['lorem', 'ipsum', 'dolor']
//
// console.log(array.map((el,idx)=>idx+1))

/////////////////////////////////////////////
//// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']////

// let array=['lorem', 'ipsum', 'dolor']
//
// console.log(array.map((el,idx)=>idx % 2 ===0 ? el[0].toUpperCase()+el.slice(1) : el))

////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']///

// let array=['lorem', 'ipsum', 'dolor']
//
// console.log(array.map(el=>el.toUpperCase()))

/////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'///

// function checkString(array){
//     return array.join('-')
// }
// console.log(checkString(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

////////////////////////////////////////////////////
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'///

// function checkString(array){
//     return array.join('/')
// }
// console.log(checkString(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'///

// function checkString(array){
//     return array.join(' ')
// }
// console.log(checkString(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

////////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']///
//
// function checkObject(array){
//     return array.filter((el,idx)=>idx % 2 !== 0)
// }
// console.log(checkObject(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

///////////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']///

// function checkObject(array){
//     return array.filter((el,idx)=>idx % 2===0)
// }
// console.log(checkObject(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//////////////////////////////////////////////////////////
/// ['lorem', 'ipsum', 'dolor', 'sit', 'amet']=>['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']///
//
// let array = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// function checkObject(ss){
// return [...array, ...ss]
// }
// console.log(checkObject(['consectetur', 'adipiscing', 'elit']))

/////////////////////////////////////////////////////////////////////////////////
/// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]///

// function checkNumber(array){
//     return array.filter(el => typeof el==="number")
// }
// console.log(checkNumber([123,33,444,'22',55,66,77,88,99]))

/////////////////////////////////////////////////////////////////////////////////
/// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]///

// let array = [123,33,444,'22',55,66,77,88,99]
// function checkString(){
//     let result = array.filter(el=>typeof el !== 'string')
//     let result2 = array.find(el=>typeof el === 'string')
//     console.log([...result, +result2])
// }
//
// checkString()

/////////////////////////////////////////////////////////////////////
/// ['null', undefined, 0, false, true, ''] => [0, false, true]///

// let array = ['null', undefined, 0, false, true, '']
//
// console.log(array.filter(el => el !== '' ? el >= 0 :el ))

///////////////////////////////////////////////////////////////////////
/// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']///

// let array = [1123, 'qwe']
// console.log([...array, ...array])

/////////////////////////////////////////////////////////////////////////
/// [null, undefined] => [null, undefined, null, undefined]///

// const array =[null, undefined]
// console.log([...array, ...array])

/////////////////////////////////////////////////////////////////////

/// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'///

// function checkString(str){
//
//     return str.split(' ').filter((el,index) => index % 2 === 0).join(' ')
// }
// console.log(checkString('lorem ipsum dolor sit amet'))



