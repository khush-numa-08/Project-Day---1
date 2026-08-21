let i;
let j;
let str = '';

for (i=1; i<=5; i++) {
    str = '';
    for (j=i; j<=5; j++) {
        str += `${j} `;
    }
    console.log(str);
}
