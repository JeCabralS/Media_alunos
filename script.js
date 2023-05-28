function calculoMedia() {
  const nome = document.getElementById("nome").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  const media = (num1 + num2 + num3) / 3;

  alert(
    `Seu nome é ${nome}\nPrimeira nota: ${num1}\nSegunda nota: ${num2}\nTerceira nota: ${num3}\nSua média foi de ${media}`
  );

  if (media >= 7 && media < 10) {
    document.getElementById("media").innerHTML = " ";
    document.getElementById("media").innerHTML = `Uau!!! mandou bem, aprovadíssimo.`;
  } else if (media >= 6) {
    document.getElementById("media").innerHTML = " ";
    document.getElementById("media").innerHTML = `O aluno está aprovado.`;
  } else if (media < 6) {
    document.getElementById("media").innerHTML = " ";
    document.getElementById("media").innerHTML = `O aluno está reprovado`;
  } else {
    document.getElementById("media").innerHTML = " ";
    document.getElementById("media").innerHTML = `Aluno não informou as notas`;
  }
}

function limparMedia() {
  
  const form = document.querySelector('#formulario');
  formulario.reset();

  document.getElementById("media").innerHTML = ``;
}

limparMedia();