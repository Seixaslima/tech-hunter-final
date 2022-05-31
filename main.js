function comecar() {
  var nomeJogador = document.getElementById('nickname').value
  if (nomeJogador == '') return

  let jogo = document.getElementById('jogo')
  jogo.classList.add('jogando')
  let mensagem = document.getElementById('saldacao')
  mensagem.innerHTML =
    `<p>Olá <strong>${nomeJogador}</strong>, vamos jogar!</p>` +
    `<p>De acordo com a opção de intervalo que você escolheu, descubra o número.!</p>`
  location.href = '#jogo'
}
