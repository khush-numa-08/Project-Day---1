let fact = 10;

let a = 0;
let b = 1;

// 0 1 1 2 3 5 8 13 21 34

for(let i=1; i<=fact; i++){
    
    console.log(a);
 
    let c = a + b ;
    a = b;
    b = c;
}