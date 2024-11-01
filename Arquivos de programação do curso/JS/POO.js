// 1 - métodos
/*const animal = {
    nome: "Bob",
    latir: function () {
      console.log("Au au");
    },
  };
  
  console.log(animal.nome)
  animal.latir(); //Para convocar a execução de uma propriedade


let x ="5"
console.log(x.length)*/
  





// 5 - classes básicas
const cachorro = {
    raca: null, //Nul por que não tem dados, uma vez que estes serão adicionados
    patas: 4,
  }
  
  //Primeiro cachorro
  const pastorAlemao = Object.create(cachorro);
  
  pastorAlemao.raca = "Pastor Alemão";
  pastorAlemao.patas = 5
  console.log(pastorAlemao)

  //Segundo cachorro
  const bulldog = Object.create(cachorro); 
  
  bulldog.raca = "Bulldog";
  bulldog.latido = "forte" //Adicionando propriedades a classe
  
  console.log(Object.getPrototypeOf(bulldog)) //Para mostrar todas as propriedades herdadas

