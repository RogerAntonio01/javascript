let valores = [8,1,5,34,78,9]

/* console.log(valores)
for(let pos = 0; pos< valores.length; pos ++) {
    console.log(`A posiçao de ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}   