/**
 * ATIVIDADE POO - RPG
 */

//1-Abstração
class Personagem {
    nome;
    poderDeAtaque;
    #hp; // Encapsulamento: HP privado

    constructor(nome, poderDeAtaque, hp = 100) {
        if (typeof hp !== 'number' || hp <= 0) {
            throw new Error('HP deve ser um número maior que 0');
        }

        this.nome = nome;
        this.poderDeAtaque = Number(poderDeAtaque);
        this.#hp = hp;
    }

    // Método para processar o dano recebido
    receberDano(valor) {
        const dano = Number(valor);
        if (isNaN(dano) || dano <= 0) {
            return `${this.nome} não recebeu dano válido.`;
        }

        this.#hp -= dano;
        if (this.#hp <= 0) {
            this.#hp = 0;
            return `${this.nome} foi atingido por ${dano} de dano e foi nocauteado! HP: ${this.#hp}.`;
        } else {
            return `${this.nome} sofreu ${dano} de dano. HP restante: ${this.#hp}.`;
        }
    }

    // Exibe o status atual do personagem
    exibirStatus() {
        if (this.#hp <= 0) {
            return `${this.nome} está fora de combate! HP: ${this.#hp}. ☠️`;
        } else {
            return `${this.nome} segue firme na luta! HP: ${this.#hp}. 💪`;
        }
    }

    get hp() {
        return this.#hp;
    }

    estaVivo() {
        return this.#hp > 0;
    }
}

// Herança: Classe Guerreiro
class Guerreiro extends Personagem {
    constructor(nome, poderDeAtaque, hp, forcaFisica) {
        super(nome, poderDeAtaque, hp);
        this.forcaFisica = forcaFisica;
    }

    // Polimorfismo: Ataque específico do Guerreiro
    atacar(alvo) {
        const danoTotal = this.poderDeAtaque + this.forcaFisica;
        const nomeAlvo = typeof alvo === 'string' ? alvo : (alvo?.nome ?? 'alvo');
        const mensagem = `${this.nome} desferiu um golpe crítico de ${danoTotal} em ${nomeAlvo} usando seu Machado! 🪓`;

        if (alvo && typeof alvo.receberDano === 'function') {
            const resultado = alvo.receberDano(danoTotal);
            return `${mensagem}\n${resultado}`;
        }

        return mensagem;
    }
}

// Herança: Classe Mago
class Mago extends Personagem {
    constructor(nome, poderDeAtaque, hp, poderMagico) {
        super(nome, poderDeAtaque, hp);
        this.poderMagico = poderMagico;
    }

    // Polimorfismo: Ataque específico do Mago
    atacar(alvo) {
        const danoMagico = Math.floor(this.poderDeAtaque + (this.poderMagico * 2));
        const nomeAlvo = typeof alvo === 'string' ? alvo : (alvo?.nome ?? 'alvo');
        const mensagem = `${this.nome} lançou uma Nevasca de ${danoMagico} de dano em ${nomeAlvo}! ❄️`;

        if (alvo && typeof alvo.receberDano === 'function') {
            const resultado = alvo.receberDano(danoMagico);
            return `${mensagem}\n${resultado}`;
        }

        return mensagem;
    }
}

// SIMULAÇÃO DO COMBATE

// Instâncias (agora com HP explícito)
const guerreiroThales = new Guerreiro('Thales', 40, 120, 25);
const magoJhonatan = new Mago('Jhonatan', 30, 100, 35);

function simularBatalha(p1, p2) {
    console.log('\n---- STATUS INICIAIS ----');
    console.log(p1.exibirStatus());
    console.log(p2.exibirStatus());

    console.log('\n---- INÍCIO DA BATALHA ----');
    let rodada = 1;

    while (p1.estaVivo() && p2.estaVivo()) {
        console.log(`\n🔁 RODADA ${rodada}`);

        console.log(p1.atacar(p2));
        console.log(p2.exibirStatus());
        if (!p2.estaVivo()) break;

        console.log(p2.atacar(p1));
        console.log(p1.exibirStatus());
        if (!p1.estaVivo()) break;

        rodada++;
    }

    console.log('\n---- STATUS FINAIS ----');
    console.log(p1.exibirStatus());
    console.log(p2.exibirStatus());
}

simularBatalha(guerreiroThales, magoJhonatan);
