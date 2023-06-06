"use strict";
const inputCep = document.getElementById('number-cep');
const button = document.querySelector('#btn-cep');
function handleButton(event) {
    event?.preventDefault();
    if (inputCep !== null) {
        const inputCepValue = inputCep.value;
        searchCep(inputCepValue);
    }
}
button?.addEventListener('click', handleButton);
async function searchCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    showCep(data);
}
function showCep(data) {
    document.body.innerHTML += `
    <div class="containerDados">
      <h1>${data.cep}</h1>
      <p>${data.logradouro}</p>
      <p>Complemento:${data.complemento}</p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.localidade}</p>
      <p>Estado: ${data.uf}</p>
      <p>IBGE: ${data.ibge}</p>
      <p>GIA: ${data.gia}</p>
      <p>DDD: ${data.ddd}</p>
      <p>SIAFI:${data.siafi}</p>
    </div>
  `;
}
