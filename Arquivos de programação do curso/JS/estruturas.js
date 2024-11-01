//Variáveis

let nome = "Íthan"

console.log(nome)

nome = "Henrique"

console.log(nome)


//Prompt e Alert
//Prompt 
let age = prompt("Digite sua idade")
console.log(`Sua idade é ${age}.`)


//Alert
let idade = 10
alert(`A idade é ${idade}`)



//Objeto Math

//Math Max (Diz o maior valor dado uma sequencia de numeros)
const vetorzao = [8,9,10,11]

console.log(Math.max(5,4,3,7,1,9))
console.log(Math.max(...vetorzao)) /*Para fazer a leitura num Array*/


//Math floor
console.log(Math.floor(5.14)) /*Arredonda para baixo*/
console.log(Math.ceil(5.14)) /*Arredonda para cima*/





 //If e else
const z = 80

if(z < 100){
    console.log("Ai papai")
}

const name = "Bruno"
if(name === "Íthan"){
    console.log(name === "Íthan") /*Fiz assim para ele me entregar true or false*/
}else{
    console.log(name === "Íthan")
}


let n = 0

for(n=0; n < 10; n++){

    console.log(n)
}




// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O g é: ${g}`);
  
    if (g === 12) {
      console.log("Chegamos no 12!");
      break;
    }
  }
  
  // 15 - continue
  for (s = 0; s < 10; s++) {
    if (s % 2 === 0) {
      console.log("Número par!");
      continue;
    }
    console.log(s);
  }









