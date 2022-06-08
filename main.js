var numeroSecreto
var tentativas = 0
var vitoria = false
var nomeJogador = ''
var jogando = false
var nivel

function comecar() {
  nomeJogador = document.getElementById('nickname').value
  nivel = document.getElementById('dificuldade').value
  if (nomeJogador == '') return

  let mensagem = document.getElementById('saldacao')
  mensagem.innerHTML =
    `<p>Olá <strong>${nomeJogador}</strong>, vamos jogar!</p>` +
    `<p>De acordo com a opção de intervalo que você escolheu, descubra o número.!</p>`

  let aviso = document.getElementById('informacao')
  aviso.innerHTML = ''
  location.href = '#jogo'

  numeroSecreto = Math.floor(Math.random() * nivel) + 1

  tentativas = 3
  vitoria = false
  jogando = true
}

function jogar() {
  if (!jogando) {
    location.href = '#jogador'

    return
  }

  if (vitoria) {
    venceu()
    return
  }
  if (tentativas < 1) {
    perdeu()
    return
  }

  let valorChutado = document.getElementById('numeroEscolhido').value

  if (valorChutado == numeroSecreto) {
    vitoria = true
    venceu()
    return
  }
  tentativas -= 1
  if (tentativas < 1) {
    perdeu()
    return
  }
  errou(valorChutado)
}

function venceu() {
  let aviso = document.getElementById('informacao')
  aviso.innerHTML = `<p>Parabéns ${nomeJogador} você acertou</p>
  <p>Aperte em Começar para jogar novamente<p>`
}

function perdeu() {
  let aviso = document.getElementById('informacao')
  aviso.innerHTML = `<p>${nomeJogador} você perdeu</p>
  <p>O numero secreto era: ${numeroSecreto}<p>
  <p>Aperte em Começar para jogar novamente<p>`
}

function errou(valorChutado) {
  let aviso = document.getElementById('informacao')
  if (valorChutado < numeroSecreto) {
    aviso.innerHTML = `<p>O número é maior</p>`
  } else {
    aviso.innerHTML = `<p>O número é menor</p>`
  }

  aviso.innerHTML += `<p>Você ainda tem ${tentativas} tentativas</p>`
}
