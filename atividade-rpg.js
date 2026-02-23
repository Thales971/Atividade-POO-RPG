/**
 * ATIVIDADE POO - RPG (EpicDev Studios)
 * Desenvolvedor: Thales 
 * 
 * Este código implementa os 4 pilares da POO:
 * 1. Abstração: Classe base Personagem.
 * 2. Encapsulamento: Atributo #hp privado e métodos de acesso.
 * 3. Herança: Classes Guerreiro e Mago estendendo Personagem.
 * 4. Polimorfismo: Método atacar(alvo) com comportamentos distintos.
 */

// 1. Abstração - Criando a base de tudo
class Personagem {
    nome;
    poderDeAtaque;
    // 2. Encapsulamento - Protegendo o HP
    #hp;

    constructor(nome, poderDeAtaque, hp = 100) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        // Garante que o HP inicial não seja negativo
        this.#hp = hp > 0 ? hp : 100;
    }

    // Método para processar o dano recebido (Encapsulamento)
    receberDano(valor) {
        this.#hp -= valor;
        // A vida nunca pode ficar negativa
        if (this.#hp < 0) {
            this.#hp = 0;
        }
        console.log(`${this.nome} recebeu ${valor} de dano.`);
    }

    // Método público para exibir o status (Encapsulamento)
    exibirStatus() {
        const status = this.#hp > 0 ? "Vivo" : "Derrotado";
        console.log(`[Status] Nome: ${this.nome} | HP: ${this.#hp} | Estado: ${status}`);
    }

    // Método auxiliar para verificar se ainda está na luta
    estaVivo() {
        return this.#hp > 0;
    }

    // Getter para o HP (opcional, mas útil para o diagrama)
    get hp() {
        return this.#hp;
    }
}

// 3. Herança - Especializando personagens
class Guerreiro extends Personagem {
    forcaFisica;

    constructor(nome, poderDeAtaque, hp, forcaFisica) {
        super(nome, poderDeAtaque, hp);
        this.forcaFisica = forcaFisica;
    }

    // 4. Polimorfismo - Comportamento específico do Guerreiro
    atacar(alvo) {
        const danoTotal = this.poderDeAtaque + this.forcaFisica;
        console.log(`${this.nome} desfere um golpe de espada potente! ⚔️`);
        alvo.receberDano(danoTotal);
    }
}

class Mago extends Personagem {
    poderMagico;

    constructor(nome, poderDeAtaque, hp, poderMagico) {
        super(nome, poderDeAtaque, hp);
        this.poderMagico = poderMagico;
    }

    // 4. Polimorfismo - Comportamento específico do Mago
    atacar(alvo) {
        const danoTotal = this.poderDeAtaque + (this.poderMagico * 2);
        console.log(`${this.nome} lança uma poderosa bola de fogo! 🔥`);
        alvo.receberDano(danoTotal);
    }
}

// SIMULAÇÃO DE BATALHA 

// Criando instâncias (1 Guerreiro e 1 Mago)
const thalesGuerreiro = new Guerreiro("Thales o Bravo", 20, 120, 15);
const inimigoMago = new Mago("Mago Sombrio", 15, 80, 25);

console.log(" INÍCIO DA JORNADA ");
thalesGuerreiro.exibirStatus();
inimigoMago.exibirStatus();
console.log("-------------------------\n");

// Simulação de turnos
let turno = 1;
while (thalesGuerreiro.estaVivo() && inimigoMago.estaVivo()) {
    console.log(` TURNO ${turno} `);
    
    // Turno do Guerreiro
    thalesGuerreiro.atacar(inimigoMago);
    inimigoMago.exibirStatus();
    
    if (!inimigoMago.estaVivo()) {
        console.log(`\n🏆 ${thalesGuerreiro.nome} venceu a batalha!`);
        break;
    }

    console.log("");

    // Turno do Mago
    inimigoMago.atacar(thalesGuerreiro);
    thalesGuerreiro.exibirStatus();

    if (!thalesGuerreiro.estaVivo()) {
        console.log(`\n💀 ${inimigoMago.nome} foi vitorioso...`);
        break;
    }

    console.log("-------------------------\n");
    turno++;
}

console.log(" FIM DA BATALHA");
thalesGuerreiro.exibirStatus();
inimigoMago.exibirStatus();
