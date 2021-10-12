let valores = [8, 1, 7, 4, 2, 9]

// FORMA PADRÃO
/*

for(let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

*/

// FORMA SIMPLIFICADA

for(let i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
