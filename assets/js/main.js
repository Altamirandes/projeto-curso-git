// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso);
    if (!peso) {
        setResultado('Peso Inválido!', false);
        return;
    }
    
    console.log(altura);
    if (!altura) {
        setResultado('Altura Inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const tipoImc = getTipoImc(imc);
    const msgResultado = `Seu IMC é de ${imc} ${tipoImc} `;

    setResultado(msgResultado, true);
});

function getImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function getTipoImc(imc){
    const tipoIMC = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return tipoIMC[5];
    if (imc >= 34.9) return tipoIMC[4];
    if (imc >= 29.9) return tipoIMC[3];
    if (imc >= 24.9) return tipoIMC[2];
    if (imc >= 18.5) return tipoIMC[1];
    if (imc <  18.5) return tipoIMC[0];
}

function criaP(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-paragrafo');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}