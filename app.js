let Amigo = [];

function agregarAmigo(){
    let insertaAmigo = document.getElementById('amigo').value;

    if(insertaAmigo == ""){
        alert("Por favor, inserte un nombre");
    }else{
        Amigo.push(insertaAmigo);
        document.getElementById('amigo').value = "";
       
    }
    recorreArray();
};

    
function recorreArray(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(i = 0; i <= Amigo.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = Amigo[i];
        lista.appendChild(li);
    }
    
}


function sortearAmigo(){
    if(Amigo == "")
    {
        alert("Favor de ingresar un amigo");
    }else{
        let amigoAleatorio = Math.floor(Math.random() * Amigo.length);
        let lista = document.getElementById('resultado');
        lista.innerHTML = "";
        lista.textContent = Amigo[amigoAleatorio];

    }
}



function validarInt(){

};
