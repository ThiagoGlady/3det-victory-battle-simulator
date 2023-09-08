
export default (dados: number, margemCrit: number = 0): {soma: number, criticos: number} => {
    let soma = 0;
    let criticos = 0;

    for (let i = 0; i < dados; i++) {
        const numeroDecimalAleatorio: number = Math.random();

        const numeroEntre1e6: number = Math.floor(numeroDecimalAleatorio*6) + 1;

        if (numeroEntre1e6 >= 6 - margemCrit) criticos += 1;

        soma += numeroEntre1e6;
    }

    return {
        soma,
        criticos,
    };
} 