// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar nombres
let ListaPersonasAñadidas = [];
let ListaNombresGanadores = [];
let nombre= '';

function agregarAmigo(){
    nombre = document.getElementById("amigo").value;
    
    //condiciones: no vacío, no repetir
    if (nombre == ''){ //toma en cuenta el =
        alert('Por favor, inserte un nombre.');
    }
    else if (ListaPersonasAñadidas.includes(nombre)) {
        alert('Ya está incluido ese nombre');
    }
    else {              // es tu ultima condición, entonces no estableces parámetros
            ListaPersonasAñadidas.push(nombre); //estamos añadiendo los nombres que se agregan a nuestro arreglo (nótese el PUSH)
            CampoConNombres ();
            borrarGanador ();
        }

        console.log(ListaPersonasAñadidas);
    RestablecerCampoDeEntrada();


        return nombre;
}

function borrarGanador (){
    let ganador = document.getElementById('resultado')
    ganador.innerHTML = ''

}

function RestablecerCampoDeEntrada (){
        document.querySelector("#amigo").value = '';
    }


function CampoConNombres (){ //no solo basta con declarar la funcion, tambien tienes que llamarla.
    let unorderedlist = document.querySelector('ul');
    let lista = document.createElement('li');
    lista.textContent = nombre;
    unorderedlist.appendChild(lista);


}

function sortearAmigo(){
    if ( ListaPersonasAñadidas.length == 0){
        alert('Tu lista está vacía! Agrega algo para sortear');
    }
    else {
        let Ganador = Math.floor((Math.random()*ListaPersonasAñadidas.length));
        //comparar el índice que se genero con el índice del arreglo 
        for (let i=0; i<ListaPersonasAñadidas.length; i++ ){
          //  declaras con el let
            if (Ganador == i){
                MostrarResultado (ListaPersonasAñadidas[i]);
            }

        }
        Reinicio () ;

    }
    


}

function Reinicio (){
    let listaVacia = document.querySelector('ul');
    listaVacia.innerHTML='';
    ListaPersonasAñadidas = [];

}


function MostrarResultado(nombre){
    let ResultadoAMostrar = document.querySelector("#resultado");
    let Cuadro = document.createElement ('li');
    Cuadro.textContent= nombre;
    ResultadoAMostrar.appendChild(Cuadro);

}