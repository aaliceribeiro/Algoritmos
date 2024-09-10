//cria referência para o formulário e elemento onde a resposta será exibida
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//evento "ouvinte", acionado quando o botão enviar é clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  const nome = frm.inNome.value // obtém valores do formulário
  const masculino = frm.inMasculino.checked
  const altura = Number(frm.inAltura.value)

  // deixa peso // declara a variável peso
  // if (masculino) { // se masculino (ou, se masculino == verdadeiro)
  // peso = 22 * ​​​​Math.pow(altura, 2) // Math.pow quadrados
  // } outro {
  // peso = 21 * Math.pow(altura, 2)
  // }

  //operador ternário define a condição
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

  // exibe a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})

frm.addEventListener("reset", () => {
  resp.innerText = ""// limpa o conteúdo do elemento h3 que exibe a resposta
})