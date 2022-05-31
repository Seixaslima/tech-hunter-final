var numeroSecreto
var tentativas
var vitoria
var nomeJogador

function comecar() {
  nomeJogador = document.getElementById('nickname').value
  let nivel = document.getElementById('dificuldade').value
  if (nomeJogador == '') return

  let jogo = document.getElementById('jogo')
  jogo.classList.add('jogando')

  let mensagem = document.getElementById('saldacao')
  mensagem.innerHTML =
    `<p>Olá <strong>${nomeJogador}</strong>, vamos jogar!</p>` +
    `<p>De acordo com a opção de intervalo que você escolheu, descubra o número.!</p>`
  location.href = '#jogo'
  if (nivel == 1) {
    numeroSecreto = Math.floor(Math.random() * 10) + 1
  } else if (nivel == 2) {
    numeroSecreto = Math.floor(Math.random() * 100) + 1
  } else if (nivel == 3) {
    numeroSecreto = Math.floor(Math.random() * 200) + 1
  }
  tentativas = 3
  vitoria = false
}

function jogar() {
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
  aviso.innerHTML = `<p>Parabéns ${nomeJogador} você acertou</p>`
}

function perdeu() {
  let aviso = document.getElementById('informacao')
  aviso.innerHTML = `<p>${nomeJogador} você perdeu</p>`
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
