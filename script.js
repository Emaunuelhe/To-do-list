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

    const texto = `${tituloActividad} - ${fechaActividad}`;
    const p = document.createElement('p');
    const boton = document.createElement('button')
    boton.innerText = 'Eliminar'
    boton.classList.add('eliminar')

    p.textContent = '📅 ' + texto;
    div.appendChild(p);
    div.appendChild(boton)
    contenedor.appendChild(div);

    div.addEventListener('click', () => {
        if(div.classList.contains('actividadc')){
            div.classList.remove('actividadc');
        }
        else{
            div.classList.add('actividadc');
        }
    });

    boton.addEventListener('click', () => {
        div.remove();
    });

    document.getElementById('texto').value ='';
    document.getElementById('fecha').value ='';
}
