
function confirmClose(){
    alert("Error: 107x. Un virus ha infestat el seu disc dur, cal eliminar tots els arxius i formatar la unitat C")
    if(confirm("Informi el seu vendedor d'aquest error."))
        alert('El navegador es tancarà ja que és impossible comunicar-se amb cap llc web:');
    else {
        alert('És impossible recuperar el sistema, es començarà a eliminar arxius')
        parent.close();
    }
}
function Tunombre(){
    let nombre = document.getElementById("nombre").value;
    alert(nombre);
    document.body.innerHtml ="<p>hola </p>" + nombre;
}