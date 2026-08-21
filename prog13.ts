let i;
let j;
let str = '';

for (i=1; i<=5; i++) {
    str = '';
    for (j=6-i; j>=1; j--) {
        str += `${j} `;
    }
    console.log(str);
}
