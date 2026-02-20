function fizzBuzz(n) {
let i ;
for (i=1; i <= n; i++ ) {
    if(i% 3 === 0 && i % 5 === 0 ) {
        console.log("fizzBuzz");

    }
    else if (i % 3 ===0) {
        console.log("fizz");

    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);

    }
}
}
// Test de la fonction
fizzBuzz(20);  



