//Dennis Hector Chirinos Hernandez
//u1e3_comparacion
//Crea un programa en el que muestres el resultado de varias operaaciones mediante alert,
//monstrando el texto exacto de la operación realizada y resultado.
var igual = 10 == 10;
alert("La operacion 10 == 10" + igual)
// 10 == 10 es literalmente lo mismo
var exactamente = 10 === 10;
alert("La operacion 10 === 10" +  exactamente)
// 10 === 10 igual que antes es lo mismo
var totalmenteexacto = 10 === 10.0;
alert("La operacion 10 === 10.0" + totalmenteexacto )
// 10 === 10.0 sigue siendo true porque es absoluto el 10.0
var mismoStrign = "Laura" == "laura";
alert("La operacion 'Laura' == 'laura'" + mismoStrign )
// "Laura" == "laura" no es lo mismo porque tiene la L mayuscula no son el mismo caracter
var mayorque = "Laura" > "laura";
alert("La operacion 'Laura' > 'laura'" + mayorque)
// En esta sale false porque en la tabla Unicode la "L" es menor que el valor de "l"
var menorque = "Laura" < "laura";
alert("La operacion 'Laura' < 'laura'" + menorque)
// En esta sale true por ser lo contrario de lo anterior dicho en el mayor que
var StringInt = "123" == 123;
alert("La operacion '123' == 123" + StringInt)
// si lo detecta que es lo mismo aunque sea diferente tipo
var literalStringInt = "123" === 123;
alert("La operacion '123' === 123" + literalStringInt)
// Aqui no lo detecta igual porque no son exactamente lo mismo por la diferencia de tipo
var convertidor = parseInt("123") === 123;
alert("La operacion parseInt('123') === 123" + convertidor)
//aqui si son lo mismo porque la "123" se convierte en int gracias al parse