const form = document.getElementById('form-numbers');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formValido = false;

function validaNumero(campoA, campoB) {
    return parseInt(campoA) < parseInt(campoB);
}

form.addEventListener('submit', function (e) {
    e.preventDefault;

    formValido = validaNumero(campoA.value, campoB.value);
    if (formValido) {
        alert('O formulário é válido!');
    } else {
        alert('O formulário não é válido!');
    }
});