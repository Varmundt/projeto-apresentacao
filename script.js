 //Botão com Mensagem Surpresa
function mostrarMensagem() {
    const msg = document.getElementById("mensagem");
    if (msg.innerHTML === "") { msg.innerHTML = "Consagre ao Senhor tudo o que você faz,<br>e os seus planos serão bem-sucedidos.<br><em>~ Provérbios 16:3</em>";} 
      else {msg.innerHTML = "";}}