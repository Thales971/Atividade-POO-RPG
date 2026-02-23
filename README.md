# EpicDev RPG - Atividade de POO

Este repositório contém a implementação de um pequeno sistema de batalha em JavaScript com foco nos **4 pilares da Programação Orientada a Objetos (POO)**. O objetivo da atividade é demonstrar abstração, encapsulamento, herança e polimorfismo em um contexto de RPG.

---

## 🧠 Descrição do Projeto

O código define uma classe base `Personagem` e duas subclasses especializadas (`Guerreiro` e `Mago`). Cada personagem possui atributos e comportamentos que seguem as regras propostas pelo arquiteto de software fictício da EpicDev Studios. A simulação final mostra uma batalha entre um guerreiro e um mago, imprimindo o status no console.

### 📁 Estrutura do Repositório

```
atividade-rpg.js           # Código principal com as classes e a simulação de batalha
resposta-da-pergunta.txt    # Respostas às questões reflexivas sobre POO
"resultado da batalha.txt" # Saída do console durante a execução
README.md                   # Documentação (este arquivo)
```

---

## 🚀 Como Executar

1. **Pré-requisitos**
   - Node.js instalado (v14+ recomendado).

2. **Executar a simulação**
   ```bash
   node atividade-rpg.js
   ```

   A saída será semelhante ao conteúdo de `resultado da batalha.txt`.

---

## 🛠️ Implementação dos Pilares de POO

| Pilar           | Onde aparece no projeto                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------------------|
| Abstração      | `class Personagem` define os atributos e métodos essenciais de um personagem.                             |
| Encapsulamento | O atributo `#hp` é privado e só pode ser alterado via `receberDano()`. Métodos como `exibirStatus()` expõem informações. |
| Herança        | `Guerreiro` e `Mago` estendem `Personagem` e compartilham lógica comum.                                   |
| Polimorfismo   | O método `atacar(alvo)` é implementado de formas diferentes nas subclasses, permitindo chamadas genéricas. |


---

## 📋 Respostas às Perguntas

Veja `resposta-da-pergunta.txt` para as explicações detalhadas:

1. **O que aconteceria se a vida não fosse privada?**
   - Qualquer parte do código poderia modificar o HP diretamente, resultando em valores inválidos e quebrando o equilíbrio do jogo.
2. **Por que a herança facilita a criação de novos personagens?**
   - Permite reaproveitar a lógica comum e declarar apenas as particularidades, tornando o código mais limpo e escalável.
3. **Onde exatamente está acontecendo o polimorfismo?**
   - No método `atacar(alvo)`, que se comporta de maneira diferente para `Guerreiro` e `Mago`, mas é invocado da mesma forma.

---

## 📈 Evoluções Possíveis (para estudo)

- Adicionar novos tipos de personagens (Arqueiro, Clérigo, etc.).
- Introduzir um sistema de itens ou magias.
- Implementar ataques especiais com cooldown.
- Transformar em um pequeno jogo interativo pedindo inputs do usuário.

---

## 📌 Observações

Este projeto é uma atividade educacional e serve como base para aprender POO. Não há dependências externas além do Node.js.

---

*Desenvolvedor:* Thales – EpicDev Studios
*Data:* feb/2024

---

Boa sorte na jornada de desenvolvimento! 🎮✨