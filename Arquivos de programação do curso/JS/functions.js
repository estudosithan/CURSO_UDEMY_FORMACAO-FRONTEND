//Functions

// 1 - criando uma função
function minhaFuncao() {
    console.log("Testando!");
  }
  
  minhaFuncao(); //Para exibir a function
  
  const minhaFuncaoEmVariável = function () {
    console.log("Função em variável!");
  };
  
  minhaFuncaoEmVariável(); //Para exibir a function
  
  function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
  }
  
  funcaoComParametro("Opa");



// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b); //Para utilizar o return, basta colocar a função dentro de outra variável para que esta funcione

console.log(resultado);

console.log(soma(c, d)); //Além de usar o return, posso fazer assim também



// 3 - Escopo da função
let y = 10; //Escopo Global

function testandoEscopo() {
  let y = 20; //Escopo Local
  console.log(`Y dentro da função: ${y}`);
}

console.log(`Y fora da função: ${y}`);

testandoEscopo();


// 4 - escopo aninhado
let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) { //True apenas para entrar no IF
    let m = 30;

    console.log(m);
  }

  console.log(m);
}

escopoAninhado();

console.log(m);


// 5 - arrow function
const testeArrow = () => {
  console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return; //Técnica para poupar espaço na memória, conhecida como Early return
  }

  console.log("Impar");
};

parOuImpar(5);
parOuImpar(6);



















































