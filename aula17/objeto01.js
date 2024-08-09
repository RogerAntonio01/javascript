let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        if (p > 0) {
            console.log('Engordou');
            this.peso += p;
        } else {
            console.log('Emagreceu');
        }
    }
};

amigo.engordar(20);
console.log(`${amigo.nome} pesa ${amigo.peso} kg`);