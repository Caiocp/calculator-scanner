## Analisador léxico de uma calculadora

---

Crie um analisador léxico de uma calculadora. O objetivo será criar uma tabela de tokens e seus tipos:

- As operações da calculadora são: `+`, `-`, `*`, `/`, `**` (potenciação)
- A calculadora deve aceitar números inteiros positivos e negativos
- Serão aceitos parênteses
- Veja o seguinte exemplo: Sequência de tokens para o exemplo Exemplo de expressão aritmética `42 + ( 675 * 31 ) - 20925`


### Como executar

*É necessário ter o [Node.js](https://nodejs.org/en/) instalado para poder executar o código*

Se não possuir o node no seu computador, pode rodar o código pelo [Repl.it](https://repl.it/@CaioCarvalho2/calculator-scanner)

Clone esse repositório com `git clone https://github.com/Caiocp/calculator-scanner.git`

Com npm, rode no seu terminal na pasta do projeto:

`npm install`

O arquivo principal é o `scanner.js`.

A função `table()` é responsável por chamar as funções que constroem a tabela de tokens.

Ao colocar a entrada na função `table()`, vá ao seu terminal e digite `node scanner.js`

![](example-exec.gif)

### Limitações para a entrada

A entrada fornecida na função `table()` deve ser em formato de string. EX: `table("( 52 + 10 ) * 2")`.

Todos os caracteres **devem** ser separador por espaços para o correto reconhecimento dos tokens.

`table("12 + 12 * 2")`✔️

`table("12+12*2")`❌

Números com sinal (seja positivo ou negativo) devem estar juntos. EX: `table("12 + 12 * -2")`
