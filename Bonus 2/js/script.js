/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

const grigliaElement = document.querySelector("#griglia");

for (let i=1; i<=100; i++){

    //creazione nuovo elemento
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");

    newDiv.className = "square"
    newSpan.className = "in-square"
    
    
    //divisibile per entrambi
    if (i % 3 == 0 && i % 5 == 0){
        newSpan.innerHTML = "FizzBuzz"
        newSpan.style.fontWeight = "Bold"
        newSpan.style.textDecoration = "underline"
        newSpan.style.fontSize = "1.3em"

        newDiv.style.backgroundColor = "green"
        
        //divisibile per 3
    } else if (i % 3 == 0){
        newSpan.innerHTML = "Fizz"
        newSpan.style.fontWeight = "Bold"

        newDiv.style.backgroundColor = "yellow"        
        
        //divisibile per 5
    } else if (i % 5 == 0) {
        newSpan.innerHTML = "Buzz"
        newSpan.style.fontWeight = "Bold"

        newDiv.style.backgroundColor = "orange"
      
        
    } else {
        newSpan.innerHTML = `${i}`;
        newDiv.style.backgroundColor = "lightblue"
        
    }
    
    grigliaElement.append(newDiv);
    newDiv.append(newSpan);

    
}