const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    //impede que a pagina recarregue o form
    event.preventDefault();

    const weight = document.getElementById('weight').value; //pega o valor do input
    const height = document.getElementById('height').value.replace(',', '.'); //pega o valor do input

    const imc = (weight / (height * height)).toFixed(2);
    const valor = document.getElementById('value');

    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if(imc < 18.5){
        description = 'Voce está abaixo do peso, entrar em contato com uma nutricionista'
    }
    valor.textContent = imc
    document.getElementById('description').textContent = description;
})