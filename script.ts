const inputCep = document.getElementById('number-cep') as HTMLInputElement | null
const button = document.querySelector('#btn-cep')


function handleButton(event: any) {
  event?.preventDefault();
  if(inputCep !== null) {
    const inputCepValue = inputCep.value;
    searchCep(inputCepValue)
  }
}

button?.addEventListener('click', handleButton)



async function searchCep(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await response.json()
  showCep(data)
}


interface Endereco {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

function showCep(data: Endereco) {
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
  `
}