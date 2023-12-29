// JS

document.getElementById("financeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const tipo = document.getElementById("tipo").value;
  const categoria = document.getElementById("categoria").value;
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value).toFixed(2);
  const vencimento = document.getElementById("vencimento").value;

  adicionarFinanceItem(tipo, categoria, descricao, valor, vencimento);
});

function adicionarFinanceItem(tipo, categoria, descricao, valor, vencimento) {
  const tabela = document
    .getElementById("financeTable")
    .getElementsByTagName("tbody")[0];
  const novaLinha = tabela.insertRow();

  const celulaTipo = novaLinha.insertCell();
  celulaTipo.textContent = tipo;

  const celulaCategoria = novaLinha.insertCell();
  celulaCategoria.textContent = categoria;

  const celulaDescricao = novaLinha.insertCell();
  celulaDescricao.textContent = descricao;

  const celulaValor = novaLinha.insertCell();
  celulaValor.textContent = `R$ ${valor}`;

  const celulaVencimento = novaLinha.insertCell();
  celulaVencimento.textContent = vencimento;
}
