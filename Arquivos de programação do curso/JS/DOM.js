// 1 - movendo-se no DOM
console.log(document.body);

console.log(document.body.childNodes); //Para ver os elementos pai do body, eles aparecem como array*/

console.log(document.body.childNodes[1]); //Para ver o primeiro elemento pai do body (header), que seria o header

console.log(document.body.childNodes[1].childNodes); //Para ver os elementos filhos do primeiro elemento do body (header)

console.log(document.body.childNodes[1].childNodes[3].textContent); //Para acessar o que está escrito no childNode correspondente

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("ul");

console.log(listItens);


// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title);


// 4 - selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);


// 5 - selecionando os elementos por CSS
//querySelectorAll
const productsQuery = document.querySelectorAll(".product");

console.log(products);

//querySelector
const mainContainer = document.querySelector("#main_container");

console.log(mainContainer);






//6 - InsertBefore
//Add antes
//Exemplo 1
const p = document.createElement("p") //Para criar a tag

const header = title.parentElement //Para pegar o elemento pai do elemento com id "title"

header.insertBefore(p , title) //P referncia o que vem depois dele
//Exemplo 2
//Colocando um elemento antes da main
const h5 = document.createElement("h5")

const legal = document.getElementById("main_container")

const bacana = legal.parentElement
bacana.insertBefore(h5,legal)

h5.textContent = "Meu h5" //para por texto







//7 - appendChild
// Add como último filho
//Exemplo 1
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)
//Exemplo 2

const teteu = document.querySelectorAll(".product")





//8 - replaceChild
//Troca conteúdo e tag
//Exemplo 1
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título" //Para add conteúdo a tag

header.replaceChild(h2,title) //tag pai "header", tag substituta "h2" , conteudo a ser substituido "title"
//Exemplo 2















































































































































































































































































































