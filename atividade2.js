// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

const btnsExpandirEl = document.querySelectorAll(".botao-expandir-retrair");

btnsExpandirEl.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let paragrafo = btn.parentNode;

    if (paragrafo.className !== "expandido") {
      paragrafo.classList.add("expandido");
      btn.innerHTML = "-";
    } else {
      paragrafo.classList.remove("expandido");
      btn.innerHTML = "+";
    }
  });
});