const buscar = document.getElementById("buscar")
const cep = document.getElementById("cep")

buscar.addEventListener("click", () => {
    const cepValue = cep.value 
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("logradouro").textContent = data.logradouro;
            document.getElementById("bairro").textContent = data.bairro;
            document.getElementById("cidade").textContent = data.localidade;
            document.getElementById("estado").textContent = data.uf;
        })
})