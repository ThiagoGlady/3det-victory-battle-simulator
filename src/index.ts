import criadorDePersonagem from "./helpers/criadorDePersonagem";
import PersonagemSimples from "./interfaces/PersonagemSimples";
import rolarD6 from "./helpers/rolarD6";

function sleep(ms:number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const oponente1: PersonagemSimples = criadorDePersonagem("Filho", 3, 1, 2);
const oponente2: PersonagemSimples = criadorDePersonagem("Saeva", 2, 1, 3);

console.log('Que comecem os jogos!\n');
sleep(2000);

const rolagemOP1 = rolarD6(2)+oponente1.habilidade;
console.log(`${oponente1.nome} tirou ${rolagemOP1} na Iniciativa`);
sleep(2000);

const rolagemOP2 = rolarD6(2)+oponente2.habilidade;
console.log(`${oponente2.nome} tirou ${rolagemOP2} na Iniciativa`);
sleep(1000);

let oponenteInicial: any = 0;
let oponenteSecundario: any = 0; 

if (rolagemOP1 >= rolagemOP2) {
    console.log(`${oponente1.nome} começa!`);
    oponenteInicial = oponente1;
    oponenteSecundario = oponente2;
} else {
    console.log(`${oponente2.nome} começa!`);
    oponenteInicial = oponente2;
    oponenteSecundario = oponente1;
}
sleep(1000);

while () {
    
}