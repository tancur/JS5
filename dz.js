


// =============================УРОК МАССИВЫ =================
// _______________________________________________________________________________________________

  // 1

  // let arr = [confirm('Вы хотите принять участие в нашем опросе?'),
  //             confirm('Вы уверены в своем ответе?'), confirm('Вы что, грубиян?')];
  // alert (arr);
// ____________________________________________________________________________________________
  // /2.

  // let arr= [];
  
  //  arr.push(prompt('Введите Ваше имя'),prompt('Введите Ваше отчество'),
  //  prompt('Введите Вашу фамилию'),prompt('Введите Ваш пол'),prompt('Введите Ваш пол') );
  //  alert (arr);
//  __________________________________________________________________________________________
  // /3


// let arr = [0,1,2,3,4,5,6,7,8,9,10];
// let x = prompt ('Введите индекс элемента от 0 до 11');
// alert (arr [x]);

// arr.length = +prompt ('Введите желаемую длину массива от 1 до 10');;
// alert(arr.length);
// _______________________________________________________________________________________
// 4/
// let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// ___________________________________________________________________________________________
// 5

// let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];


// let arr2 = [[arr[1].slice(1)],[arr[2].slice(1)],[arr[3].slice(1)],[arr[4].slice(1)]]
// console.log(arr2)
// ____________________________________________________________________________________
// 6

//  let phrase = prompt ('Введите строку из 4 слов');
//  let word = prompt ('Введите любое слово из строки');

// let arr= phrase.split(' ');

// alert ((arr.indexOf(word,0) === -1) ? 'Введеное Вами слово в предложении отсутствует' :
// `Введеное Вами слово ${arr.indexOf(word,0)+1} -е по счету в предложении` 
// )
// ____________________________________________________________________________________________
// 7

//  let arr = [];
//  for (let i=1; i<=5; i++) {arr.push(prompt('Введи слово'))};
//  console.log(arr);
//  let arr1 = [];
//  while (arr.length>0) {
//         arr1.push(arr.pop())
//       }
//  console.log(arr1);
// ________________________________________________________________________________
//  8


// let arr = [];
//  for (let i=1; i<=5; i++) {arr.push(prompt('Введи слово'))};
//  console.log(arr);
//  let arr1 = [];
//  let arr2 = [];
//  while (arr.length>0) {
//         arr1.push(arr.pop());
//         arr2.unshift(arr1.shift())
//       }
       
 
//  console.log(arr2);
// ____________________________________________________________________________
// 9

// let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// let arr2 = [...arr];
// console.log(arr2);
// ________________________________________________________________________________
// 10

// let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// let arr2 = structuredClone(arr)
// console.log(arr2);
// ______________________________________________________________________________
// 11

//  let arr1 = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
//  let arr2 = arr1;
//  alert(arr1===arr2 ? 'true':'false');

// let arrayCheck = arr1.every(function(elem, index) {
// 	if (arr1[elem, index] === arr2[elem, index]&&arr1.length === arr2.length) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// alert(arrayCheck);

// стрелочная функция для сравнения
//  alert(arr1.length === arr2.length && arr1.every((value, index)=> value=== arr2[index]) ? 'true':'false');
// _____________________________________________________________________________________
// 12

// let arr1 = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// arr2= [...arr1[0], ...arr1[1],...arr1[2],...arr1[3],...arr1[4]]
// alert(arr2.length)

// так не получается 
// let arr1 = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// let arr2 = [];
// for (let i=0; i<=arr1.length; i++) {
  
  
//   arr2=[...arr1[i]]};
// console.log(arr2);
// _____________________________________________________________________

// 13


// let str = prompt ('Введите различные буквы');
// let arr = [...str];
// [a,,,,b,,,,c]=arr
// console.log(a);
// console.log(b);
// console.log(c);
// ________________________________________________________________________________________
// 14

 
//  let str = prompt ('Введите различные буквы');
//  let arr = [...str];
//  console.log(arr);
//  console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);
//  [,a='!',,b='!',c='!']=arr
//  console.log(a);
// console.log(b);
// console.log(c);
// ___________________________________________________________________________________
// 15


//  let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
//  let [,[,...a],[,...b],[,...c],[,...d]] = arr
//  console.log(a,b,c,d)
//  arr2= [...a, ...b,...c,...d]
//  console.log(arr2)
// ===============================================================================
// 16

//  let arr = ["John", "Paul", "George", "Ringo"]
//  for (let i of arr) {alert(i)}
// ________________________________________________________________________

// 17


//  let arr = ["usd","eur","gbp","uah"] ;
//  let   str = "<select>";
 
//  for (let i of arr) {str+=`<option value="${i}">${i}</option>`}
  
//  str+= "</select>"

 

//  document.write(str) //document.write відобразить ваш HTML на сторінці


// _____________________________________________________________________

// /18

//  const arr = ["John", "Paul", "George", "Ringo"]
//  let   str = "<table>"
//  str += "<tr>"
//  for (const i of arr){str +=`<td>${i}</td>`
 
//  }
//  str +="</tr>"
//  str+= "</table>"
//  document.write(str) 


// _____________________________________________________________________

//  19

//  const arr = ["John", "Paul", "George", "Ringo"]
//  let   str = "<table>"
//  for (const i of arr){
//      str +=`<tr><td>${i}</td></tr>`
//   }
//  str+= "</table>"
//  document.write(str)





// ________________________________________________________________________

//  20





// let arr = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (const i of arr){ str += "<tr>"
//    for (const k of i){ 

//       str +=`<td>${k}</td>`
//     }
//     str += "</tr>"
// }
// str+= "</table>"
// console.log(str) 
// document.write(str)

// ______________________________________________________________________________________


// /21

// let arr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8],[0,3,6,9,12],[0,4,8,12,16]];
// let   str = "<table>";
// for (const i of arr){ (arr.indexOf(i)%2 === 0) ? str += "<tr>" : str += `<tr style="background-color: yellow">`;
//    for (const k of i){ 

//       str +=`<td>${k}</td>`
//     }
//     str += "</tr>"
// }
// str+= "</table>"
// console.log(str) 
// document.write(str)




// ______________________________________________________________

// 22
// const capitalize = str => {
//   let result = str.toLowerCase(); 
//   result = result[0].toUpperCase() + result.slice(1);
//   return result //саме цей код забезпечить повернення результату функції
// }
// console.log(capitalize("cANBerRa")) //Canberra
// _______________________________________________________________________________

// 23

  // let phrase = prompt ('Введите строку из  слов разделяя их пробелами');
  
  
  // let arr= phrase.split(' ');
  // let result = arr.map(elem=>elem.toLowerCase()[0].toUpperCase() + elem.toLowerCase().slice(1));
  // let arr1 = result.join (' ');
  // console.log(result);
  // console.log(arr1)

  // ______________________________________________________________________________

  // 24


  // let phrase = prompt ('Введите строку из  слов, разделяя их пробелами,не употребляя слова : "оно","того","это" ');
    
  //   let arr = phrase.split(' ');
  //   console.log(arr);
  //   let word = ["оно","того","это"];
  // let result = arr.filter(elem =>!word.includes(elem)); 
  // console.log(result===true? arr.join(' '):`Попрошу не выражаться`);
// =====================================================================================
// Тут ничего не получается. Хочу сравнить открывающие и закрывающие символы с массивом соответствия, если совпадает,
//  пушить входящий и его потом удалять когда появляется аналогичный исходщий. В итоге массив bracketsStack
//  должен обнулиться, или не обнулиться, в итоге выходит полная чушь

// const line = prompt('vvedite tekst')
// const arra = line.split('')
// const bracketsStack = []
// const open = ['{', '(', '[']
// const close = ['}', ')', ']']
// for (let i of arra) {

// openSymbol = open.indexOf(arra[i]);
// if  (openSymbol!== -1)  {bracketsStack.push(openSymbol); continue; } 

// closeSymbol = close.indexOf(arra[i]);
// if  (closeSymbol!== -1) {bracketsStack.pop(openSymbol);}
// console.log(arra)
// console.log(bracketsStack.length)
// if (bracketsStack.length !== 0) { return false;}

// return true;

// }






// =========================================================================

// Реалізуйте завдання For Select Option використовуючи reduce: НЕ ПОНИМАЮ

//  let arr = ["usd","eur","gbp","uah"] ;
//  let   str = "<select>";
 
// //  for (let i of arr) {str+=`<option value="${i}">${i}</option>`}

// let str1 = arr.reduce(str,item=>`<option value="${item}">${item}</option>`, str)
// console.log(str1)
  
//  str= str + str1 + "</select>"

 

//  document.write(str) //document.write відобразить ваш HTML на сторінці





  // Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та
  //  тернарний оператор поверніть з функції слово без змін, якщо воно не полягає в якомусь
  //   іншому масиві заборонених слів. Якщо слово полягає в цьому списку, функція повинна повернути слово
  //  BEEP. Зберіть масив назад 
  // у рядок через пробіл. Таким чином, ви зможете реалізувати заміну кількох заборонених слів на BEEP.

  // let phrase = prompt
  //  ('Введите строку из  слов, разделяя их пробелами,не употребляя слова : "оно","того","это" ');

  //  let arr = phrase.split(' ');
  //  let word = ["оно","того","это"];
  //  let arr2=[];
  //  for (let i of arr) {let result = arr.filter(elem =>!word.includes(elem));
  // arr2=arr2.push(i)}
    //  не знаю






























// //  let arr = ['1', '2', '3', '4', '5', '6'];
// // let result = [];

// while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
// 	let first = arr.shift();
// 	let last  = arr.pop();
	
// 	let str = first + last; // тут будет строка '16', потом '25', потом '34'
// 	result.push(str);
// }

// // После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
// result = result.join('-');
// console.log(result);