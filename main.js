function converterDolar() {
    const dolar = 5.05;
    var valorReal = document.getElementById("real").value;
    var rDolar = dolar * valorReal;

    document.getElementById('resultado').textContent = rDolar.toFixed(2);
}

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})

