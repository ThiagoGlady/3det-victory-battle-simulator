export default (dados: number): number => {
    let soma = 0;

    for (let i = 0; i < dados; i++) {
        const numeroDecimalAleatorio: number = Math.random();

        const numeroEntre1e6: number = Math.floor(numeroDecimalAleatorio*6) + 1;

        soma += numeroEntre1e6;
    }

    return soma;
} 