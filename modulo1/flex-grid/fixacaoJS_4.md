```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let vezes = 0
  for(let num of arrayDeNumeros){
    if (num === numeroEscolhido){
      vezes++
    }
  }
  if (vezes > 0){
    return `O número ${numeroEscolhido} aparece ${vezes}x`
  } else {
    return "Número não encontrado"
  }
}
```