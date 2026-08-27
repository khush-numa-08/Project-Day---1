let P = 50000;
let N = 5;
let R = 0.07;

if (P == 50000 && N == 3) {
    R = 0.05;
}
else if (P == 60000 && N == 5) {
    R = 0.06;
}
else if (P == 70000 && N == 7) {
    R = 0.07;
}
else if (P == 80000 && N == 8) {
    R = 0.08;
}
else if (P == 100000 && N == 9) {
    R = 0.09;
}
else {
    console.log("Invalid P or N");
}


let intrest = P * N * R;
let netAmount = P + intrest;

console.log("P is",P);
console.log("N is",N);
console.log("R is",R);
console.log("Intrest is",intrest);
console.log("Net Amount is",netAmount);
