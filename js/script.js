/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

const grigliaElement = document.querySelector("#griglia");


for (let i=1; i<=100; i++){

    //divisibile per entrambi
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")

    //divisibile per 3
    } else if (i % 3 == 0){
        console.log("fizz")

    
    //divisibile per 5
    } else if (i % 5 == 0) {
        console.log("buzz")
       
    } else {
        console.log(i)

    }

}