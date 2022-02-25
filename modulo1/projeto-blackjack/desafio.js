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

if (confirm("Boas vindas ao jogo de Blackjack!\n Quer iniciar uma nova rodada?")) {
    let cartaPC = []
    cartaPC.push(comprarCarta())
    cartaPC.push(comprarCarta())
    let cartaUsuario = []
    cartaUsuario.push(comprarCarta())
    cartaUsuario.push(comprarCarta())
    while (cartaPC[0].texto.includes("A") && cartaPC[1].texto.includes("A")) {
        cartaPC[0] = comprarCarta()
        cartaPC[1] = comprarCarta()
    }
    while (cartaUsuario[0].texto.includes("A") && cartaUsuario[1].texto.includes("A")) {
        cartaUsuario[0] = comprarCarta()
        cartaUsuario[1] = comprarCarta()
    }
    let pontosPC = cartaPC[0].valor + cartaPC[1].valor
    let pontosUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
    let loop = true
    while (pontosUsuario <= 21 && loop) {
        let mensagem = ""
        for(i = 0; i < cartaUsuario.length; i++){
            mensagem += ` ${cartaUsuario[i].texto}`
        }
        if (confirm(`Suas cartas são${mensagem}. A carta revelada do computador é ${cartaPC[0].texto}.`,
            "\n Deseja comprar mais uma carta?")) {
            cartaUsuario.push(comprarCarta())
            pontosUsuario += cartaUsuario[cartaUsuario.length - 1].valor
        } else {
            loop = false
        }
    }
    while (pontosPC < pontosUsuario && pontosUsuario <= 21){
        cartaPC.push(comprarCarta())
        pontosPC += cartaPC[cartaPC.length - 1].valor
    }
    let resultado = ""
    let mensagemUsuario = ""
    let mensagemPC = ""
    if(pontosUsuario > 21 || pontosPC <= 21 && pontosPC > pontosUsuario){
        resultado = "O computador ganhou"
    } else if (pontosUsuario === pontosPC){
        resultado = "O usuário e o computador empataram"
    } else {
        resultado = "O usuário ganhou"
    }
    for(carta of cartaUsuario){
        mensagemUsuario += ` ${carta.texto}`
    }
    for(carta of cartaPC){
        mensagemPC += ` ${carta.texto}`
    }
    alert(`Usuário - Cartas:` + mensagemUsuario + ` - Pontuação: ` + pontosUsuario +
    `\nComputador - Cartas:` + mensagemPC + ` - Pontuação: ` + pontosPC +
    `\n` + resultado)
} else {
    alert("O jogo acabou!");
}
