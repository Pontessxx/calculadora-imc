const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    //impede que a pagina recarregue o form
    event.preventDefault();

    const weight = document.getElementById('weight').value; //pega o valor do input
    const height = document.getElementById('height').value; //pega o valor do input

    const imc = (weight/ (height * height)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';
    
})