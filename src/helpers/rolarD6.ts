export default (): number => {
    const numeroDecimalAleatorio: number = Math.random();

    const numeroEntre1e6: number = Math.floor(numeroDecimalAleatorio*6) + 1;

    return numeroEntre1e6;
} 