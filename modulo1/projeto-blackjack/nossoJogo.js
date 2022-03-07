/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");
jogarBlackjack()
function jogarBlackjack() {
    if (confirm("Quer iniciar uma nova rodada?")) {
        const cartaPC1 = comprarCarta()
        const cartaPC2 = comprarCarta()
        const pontosPC = cartaPC1.valor + cartaPC2.valor
        const cartaUsuario1 = comprarCarta()
        const cartaUsuario2 = comprarCarta()
        const pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor

        console.log(`Cartas computador: ${cartaPC1.texto}, ${cartaPC2.texto} - pontuação ${pontosPC}`);
        console.log(`Cartas usuário: ${cartaUsuario1.texto}, ${cartaUsuario2.texto} - pontuação ${pontosUsuario}`);

        if (pontosPC > pontosUsuario) {
            console.log("O computador ganhou!");
        } else if (pontosPC < pontosUsuario) {
            console.log("O computador ganhou!");
        } else {
            console.log("Empate!");
        }
        jogarBlackjack() // pergunta novamente se o usuário quer jogar
    } else {
        console.log("O jogo acabou!");
    }
}