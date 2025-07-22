let contador = 1

const actividades = document.querySelectorAll('.actividad')

function agregarActividad(){
    const tituloActividad = document.getElementById("texto").value.trim();
    const fechaActividad = document.getElementById('fecha').value;

    if(!tituloActividad || !fechaActividad){
        alert("Ingrese un valor en el titulo o la fecha");
        return;
    }

    const contenedor = document.getElementById('activity');
    const div = document.createElement('div');
    div.classList.add('actividad');
    div.setAttribute('data-id',contador)

    const texto = `${tituloActividad} - ${fechaActividad}`;
    const p = document.createElement('p');
    p.textContent = '📅 ' + texto;
    div.appendChild(p);
    contenedor.appendChild(div);

    document.getElementById('texto').value ='';
    document.getElementById('fecha').value ='';
    contador += 1
    return contador
}

actividades.forEach(actividad => {
    actividad.addEventListener('click', ()=> {
        actividades.forEach(t => t.classList.remove('actividad'))
        actividad.classList.add('actividadc')
    })
});