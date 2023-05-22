const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const imc = (weight / (height * height)).toFixed(2);
    const value = document.getElementById('value');

    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if(imc < 18.5){
        description = 'Você está abaixo do peso. Entre em contato com uma nutricionista.';
    } else {
        // Adicione outras faixas de IMC e descrições de acordo com sua necessidade
    }

    value.textContent = imc;
    document.getElementById('description').textContent = description;
});
