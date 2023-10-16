
// kalkulator
// function Toplama(a, b) {
//     return a + b
// }
// function Cixma(a, b) {
//     return a - b
// }
// function Vurma(a, b) {
//     return a * b
// }
// function Bolme(a, b) {
//     return a / b
// }
// function Birlesme(a, b, callback) {
//     return callback(a,b)
// }

// console.log(Birlesme(15,25,Vurma));

// function Toplama(...numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
// }
// function Cixma(...numbers) {
//     let  arr=[...numbers]
// let cixma=arr[0]
// for (let index = 1; index < arr.length; index++) {
// cixma-=arr[index]

// }
// return cixma
// }
// function Vurma(...numbers) {
//     return  numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1); 
// }
// function Bolme(...numbers) {
//     let  arr=[...numbers]
//     let bolme=arr[0]
//     for (let index = 1; index < arr.length; index++) {
//         bolme=bolme/arr[index]

//     }
//     return bolme
// }
// function Birlesme(callback,...numbers) {
//     return callback(...numbers)
// }

// console.log(Birlesme(Bolme,25,5));




// function salamla(name="Nura") {
//     console.log("salam " +name);

// }
// salamla("")




// function sum(a,b) {
//     return a+b
// }
// // arrow 
// const sum = (a,b) => a + b
// expression
// const sum = function(a,b){
//     return a+b
// }


function salamla1(ad="Nura" , soyad="isazade") {
    console.log("salam " +ad  + soyad);
}
//// // arrow 
const salamla2 = (ad,soyad) => console.log("salam " +ad +"," + soyad);

// expression
const salamla3 = function(ad,soyad){
    console.log("salam " +ad +"," + soyad);
     }
     salamla2( "Mehi","Qurbanova")