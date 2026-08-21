let fact = 10;
let i;

let a = 0;
let b = 1;
let c;
let str = '';

// 0 1 1 2 3 5 8 13 21 34

for(i=1; i<=fact; i++){
    
     str += `${a} `;
 
    c = a + b ;
    a = b;
    b = c;
}
console.log(str);
