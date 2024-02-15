// FUNCTION
/**
 * - Sekumpulan program yang ditujukan untuk menyelesaikan proses khusus
 * - Function bersifat reusable yang bisa digunakan berulang-ulang
 * - Function bersifat modular
 * - Built-in function : fungsi bawaan javascript
 * - User-defined function : fungsi yang dibuat sendiri
 * - Jenis function :
 *      - Declarative function :
 *          function namaFunc(param1, param2,...){
 *              // task program
 *          }
 *      - Function expression :
 *        const namaFunc = function(param1, param2,...){
 *          // task program
 *        }
 *      - Arrow function :
 *        const namaFunc = (param1, param2,...) => {
 *             // task program
 *        }
 * - Function tidak harus menyiapkan/ menerima  parameter ( perlu menyiapkan parameter ketika membutuhkan value di luar function dan valuenya dinamis)
 * - Ketika menggunakan parameter, pastikan data yang dimasukkan berurutan
 * - Function boleh menghasilkan nilai balik/ return value atau tidak menghasilkan nilai balik
 */


// Declarative function
function penjumlahan(){
    let angkaA = 20;
    let angkaB = 15;
    const hasil = angkaA + angkaB;
    console.log("Proses penjumlahan:", hasil);

    // nilai balik / return value
    return hasil;
}
// tipe fungsi statis karena tidak menggunakan parameter

// Memanggil function
penjumlahan;

// Menjalankan function
penjumlahan();
console.log("Output func :", penjumlahan());

function pengurangan(angkaA, angkaB){
 const hasil = angkaA - angkaB;
 console.log("Cek proses pengurangan :", hasil);
 return hasil.toString(); // type data bisa berubah tergantung hasil yang diinginkan
}

let hasilPengurangan = pengurangan(20,15) * 2;

console.log(hasilPengurangan);
console.log(typeof pengurangan(40,15));

// Parameter default value
function perkalian(angkaA = 0,angkaB = 0){
    console.log(angkaA, angkaB);
    const hasil = angkaA * angkaB;
    return hasil;
}

console.log(perkalian());


//exercise

function evenOdd(number){
    let result = ""; // pastikan containernya sesuai dengan type data nya
    if(number%2 === 0) { 
        result = "input angka adalah genap."
    } else {
        result = "input angka adalah ganjil."
    }
    return result;
}

console.log(evenOdd(20))

// alternatif cara 1

function evenOdd2(value){
    let result2 = "";
    const modValue = value%2;
    console.log(modValue)
    if(!modValue) { 
        result2 = "input angka adalah genap."
    } else {
        result2 = "input angka adalah ganjil."
    }
    return result2;
}
console.log(evenOdd2(3))

// alternatif cara 2

// function evenOdd2(value){
//     let result = "";
//     const modValue = value%2;
//     console.log(modValue)
//     result = !modValue ? "genap" : "ganjil" ;
//     return result;
// }



/**= kondisi penggunaan ternary = 
 * kondisi if/else
 * task hanya 1 baris ( bila lebih dari 1 baris maka tidak bisa digunakan)
 *    
*/

// Arrow function
const evenOddArrow = (value) => (value%2 === 0 ? "Genap" : "Ganjil");
//const evenOddArrow = (value) => {
//  return value%2 === 0 ? "Genap" : "Ganjil";
// };
console.log(evenOddArrow(4));

// Callback Function : sebuah function yang dimasukkan kedalam function lain melalui parameter yang disediakan

function ganjilGenap(callback){
    console.log(typeof callback)
    console.log(callback());
    const modValue2 = callback() % 2;
    let result = "";
    if (!modValue2) {
        result = "GENAP"
    } else {
        result = "GANJIL";
    }
    return result;
}

let hasil = ganjilGenap(penjumlahan);
console.log(hasil);
function executeCb() {
    return pengurangan(5,2);
}

hasil = ganjilGenap(executeCb);
console.log(hasil);

hasil = ganjilGenap(function() {
    return pengurangan(8,4);
});
console.log(hasil)

hasil = ganjilGenap((valueA,valueB) => valueA + valueB, 10, 2); //penulisan arrow function seperti ini tidak perlu menuliskan return, kecuali yang menggunakan kurung kurawal
console.log(hasil);



//anonymous function

function ganjilGenap(callback, angkaA, angkaB) {
    //callback: (valueA,valueB)=> valueA - valueB
    console.log(callback);
    //angkaA:10
    console.log(angkaA);
    //angkaB:12
    console.log(angkaB);
    console.log(typeof callback);
    console.log(callback(angkaA,angkaB));
    //callback : (valueA,valueB) => 10-12
    const modValue = callback(angkaA, angkaB) %2;
    let result = "";
    if (!modValue) {
        result = "genap";
    } else {
        result = "ganjil";
    }
    return result;
}

let hasil2 = ganjilGenap((valueA,valueB) => valueA - valueB)
console.log(hasil);


//cara menggunakan random generator

function ganjilGenap(callback) {
    console.log(callback);
    console.log(typeof callback);
    let angkaBaru = Math.round(Math.random() * 10);
    console.log (angkaBaru);
    let angkaBaru2 = Math.round(Math.random() * 10);
    console.log(angkaBaru2);
    console.log(callback(angkaBaru, angkaBaru2));
    // callback : (valueA, valueB) => valueA + valueB
    const modValue = callback(angkaBaru,angkaBaru2) % 2;
    let result = "";
    if (!modValue) {
        result = 'genap';
    } else {
        result = 'ganjil';
    }

    return result;
}

hasil = ganjilGenap((valueA,valueB) => valueA + valueB);
console.log(hasil);

// ARRAY FUNCTION
let arr = [2,1,5,3,12,45];
// array.forEach(callback) : untuk mengakses setiap data dan index pada array
for (const value of arr) {
    console.log(value)
}
arr.forEach((value,index) => {
    console.log(value);
    console.log(index);
});

let result = ""
arr.forEach((value,index) => {
    result += `${value} berada di index ${index} \n` ;
});

console.log(result)


// arr.forEach((value))
// tidak bisa diberi return

// array.map(callback) : untuk mengakses data dan index pada array sekaligus menghasilkan array baru dengan data yang baru
let numArr = [1,2,3,4,5];
let newNumArr = numArr.map((value,index) => {
    // console.log(value);
    // console.log(index);
    const multiple = value + 3;
    console.log(multiple);
    return multiple;
});

// array.filter(callback)

let newArr = ["BMW", "TOYOTA", "LEXUS"];
function duplicateForEach(callbackfn,dataArr) {
    
    for (let i = 0 ; i < newArr.length ; i++) {
    let value = dataArr[i]
    callbackfn(value,i)
    };
}

duplicateForEach((value, index) => {
    console.log(value);
    console.log(index);
},newArr);


function duplicateMap(callbackfn, dataArr) {
    let arr = [];
    for (let i =0 ; i < dataArr.length; i++){
        let value = dataArr[i]
        let newData = callbackfn(value,i);
        console.log(newData);
        arr.push(newData)
    };
    
    return arr;
}

let resultMap = duplicateMap((value, index) => {
    console.log(value);
    console.log(index);
    return `merk mobil, ${value}`;
},newArr);

console.log(resultMap);

//array.filter(callback); untuk mengakses setiap data dan index dari suatu array sekaligus menghasilkan
// data array baru sesuai condition yang diberikan oleh callback functionnya.

let money = [1000,500,2000,3000,10000,12000];
let newMoney = money.filter((val,idx) => {
    console.log(val);
    console.log(idx);
    return val < 5000;
});

console.log(newMoney);

function duplicateFilter(callbackfn, dataArr) {
    let arr = [];
    for (let i =0 ; i < dataArr.length; i++){
        let value = dataArr[i];
        console.log(value);
        let conditionResult = callbackfn(value, i);
        console.log(conditionResult);
        if ( conditionResult === true) {
            arr.push(value);
        }
    };

    return arr;
    
}

let newMoney2 = duplicateFilter((val,idx) => {
    return val < 5000;
},money);

console.log(newMoney2);
