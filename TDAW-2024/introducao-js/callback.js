const inicio = () => {
console.log('inicio');

}

const fim = () => {

    console.log('fim');
}

const processa = (funcao1, funcao2) => {

    funcao1();
    funcao2();

}

processa(inicio, fim);

processa(() => {
    console.log('funcao 1');
}, () => {
    console.log('funcao 2');
})