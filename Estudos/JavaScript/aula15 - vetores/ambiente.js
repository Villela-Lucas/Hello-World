let num = [5, 8, 2, 9, 3]

num[5]=6
num.push(7)
var tam = num.length
console.log(`Nosso vetor é o ${num}`)
console.log(`Tamanho: ${tam} posições`)
console.log(`Vetor ordenado: ${num.sort()}`)

let pos = num.indexOf(90) // retorna o índice do valor buscado
if(pos == -1){
    console.log('O valor nã foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos} de ${num.length}`)
}