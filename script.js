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
    } else if (imc>=18.5 && imc <=25){
        description = 'Peso ideal, parabéns!'
    }else if (imc> 25 && imc<=30){
        description = 'voce esta acima do peso! procure contato com nutricionistas/medicos.'
    }else if (imc> 30 && imc<=25){
        description = 'Obesidade Moderada! procure contato com nutricionistas/medicos.'
    }else if (imc> 35 && imc<=40){
        description = 'Obesidade severa! procure contato com nutricionistas/medicos.'
    }else{
        description = 'Obesidade estágio final, procure um medico'
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;
});
