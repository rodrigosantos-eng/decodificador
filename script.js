function criptografar () {
  var inputText = document.getElementById("texto-input").value;

  var resultCriptografia = inputText.replace("e","enter").replace("i","imes").replace("a","ai").replace("o","ober").replace("u","ufat");

  document.getElementById('output').innerHTML = resultCriptografia;
  
}

function descriptografar () {
  var outputText = document.getElementById("texto-input").value;
  var resultDescriptografia = outputText.replace("enter","e").replace("imes","i").replace("ai","a").replace("ober","o").replace("ufat","u");

  document.getElementById('output').innerHTML = resultDescriptografia;
}

function copiarTexto() {
  var textoCopiado = document.getElementById('output').innerText;

  var textareaTemporaria = document.createElement('textarea');
  textareaTemporaria.value = textoCopiado;
  textareaTemporaria.select();
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência!');
}