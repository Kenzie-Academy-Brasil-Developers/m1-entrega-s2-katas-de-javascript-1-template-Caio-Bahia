function cubicSquare(){
    for(cont=1; cont <=10; cont++){
        console.log(cont**3)
    }
}

// cubicSquare()

function divisibleFor(number, number2){

    for(number=1;number<=100;number++){
        if(number%number2 == 0){
            console.log(number)
        }
    }

}

// divisibleFor(100,10)

function stringElement(word, position ){

    for (i=0;i<=position;i++){
        console.log(word.toUpperCase()[position])
    }
}

// stringElement("algoritmos", 7)

function stringSlicer(palavra, numero){

    let NewString = ""

    for(let i = 0; i<=numero;i++){
        if(palavra[i] !== numero ){
          
            console.log(  NewString += palavra[i] )

        }
    }
}



// stringSlicer("algoritmos", 3)

function stringRest(string, numero){

    let NewString = ""

    for(let i = numero; i<string.length; i++){
        NewString = NewString + string[i]   
    }

    console.log(NewString)
}
// stringRest("algoritimos", 2)

function countVowels(String){

    let contadorVogais=0

    for(let i=0; i<= String.length; i++){

        if(String[i] === "a"|| String[i] === "e"|| String[i] === "i"||String[i] === "o"||String[i] === "u"){

            contadorVogais++
        }   
        
    }
    
    return contadorVogais
   
}
// console.log(countVowels('abacaxi'))


function countTextOccurrences(string,letra){

    let ContadorOcorrencia = 0

    for(let i=0; i<=string.length;i++){
        if(string[i] === letra){

            ContadorOcorrencia++
        }
    }
    return ContadorOcorrencia
}

// console.log(countTextOccurrences('aaaaaaa', 'a'))

function textBackwars(string){

    let visor = ""

    for(let i=string.length -1 ; i >= 0; i--){
    
    
        visor += string[i]
    }

    return visor
}


// console.log(textBackwars('caio'))

function removeBlank(string){

    let visor = ""

    for(let i=0 ; i < string.length; i++){
        if(string[i] !== " "){
            visor += string[i]
        }
        
       
    }

    return visor
}

// let removeEspaço = removeBlank("joao é massa   !")
// console.log(removeEspaço)

function encryptText(string){

    let letra1 = "x"
    let letra2 = "y"
    let letra3 = "w"
    let letra4 = "k"
    let letra5 = "u"

    for(let i=0; i < string.length;i++){

        if(string[i] == "a"){
            string[i] += letra1
        }

        else if(string[i] == "e"){
            string[i] += letra2
        }

        else if(string[i] == "i"){
            string[i] += letra3
        }

        else if(string[i] == "o"){
            string[i] += letra4
        }

        else if(string[i] == "u"){
            string[i] += letra5
        }
       
    }

}


let criptografia = encryptText("Uma frase ultra secreta que precisa ser criptografada")

console.log(criptografia)



   
