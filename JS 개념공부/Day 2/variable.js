'use strict'; //바닐라 자바스크립트

let globalName='global name';
{
let name='lsj';
console.log(name);
name='hello';
console.log(name);
}
console.log(name);
console.log(globalName);

//****************************************** */

let count = 7;
let size = 12.232;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


const infinity =1 /0;