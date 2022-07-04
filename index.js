class Producto{
    constructor(nombre, descripcion, precio,){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
    }
      seleccionaste(nombre){
        return this.nombre == nombre;
}


}
const producto1 = new Producto("dije estrella", "Dije swarovski, color azul", 1500);
const producto2 = new Producto("anillo de flores", "Anillo de plata, Flores", 3000);
const producto3 = new Producto("dije susanito", "Dije circular en pridra blanca", 2300);

    
for (let index = 0; index == 0; index++) {
    let entrada = prompt("SELECCIONA UN PRODUCTO --- 1 DIJE ESTRELLA --- 2 ANILLO DE FLORES --- 3 DIJE SUSANITO");

    if (producto1.seleccionaste(entrada)){
        alert(" USTED SELECCIONO " + producto1.nombre + " " + " " +  "DESCRIPCION" +" " + producto1.descripcion + " " + "PRECIO$" + producto1.precio);
    }
    if (producto2.seleccionaste(entrada)){
        alert(" USTED SELECCIONO " + producto2.nombre + " " + " " +  "DESCRIPCION" +" " + producto2.descripcion + " " + "PRECIO$" + producto2.precio);
    }
    if (producto3.seleccionaste(entrada)){
        alert(" USTED SELECCIONO " + producto3.nombre + " " + " " +  "DESCRIPCION" +" " + producto3.descripcion + " " + "PRECIO$" + producto3.precio);

    

    }


// METODO DE FILTRADO
console.log( producto1.nombre.includes('dije estrella') ) 
console.log(producto2.nombre.includes('anillo de flores') )
console.log( producto3.nombre.includes('dije susanito') ) 

// METODO DE BUSQUEDA 
console.log(producto1.nombre.indexOf('dije estrella') ) 
console.log(producto2.descripcion.indexOf('Dije swarovski, color azul') ) 
console.log(producto3.nombre.indexOf('dije susanito'))

    



// SELECCION DE PAGO 
let pago =  prompt("SELECCIONA UNA FORMA DE PAGO *** 1-VISA 2-MASTER 3-AMEX ***").toUpperCase();
switch (pago){
case "VISA":
     alert("USTED SELECCIONO VISA");
     break;
case "MASTER":
    alert("USTED SELECCIONO MASTER");
    break;
case "AMEX":
    alert("USTED SELECCIONO AMEX");
        break;
         
}

//CALCULO DE PAGO

const calculo = (cuota) => cuota /seleccion;
let seleccion = prompt("SELECCIONAR CUOTAS  3 CUOTAS   6 CUOTAS  12 CUOTAS");
let valor = prompt("INREGASE EL VALOR PARA EL PRODUCTO SELECCIONADO")
switch (seleccion) {
    case "3":
        alert("PRODUCTO" + " " + entrada + " " + "FORMA DE PAGO" + " " + pago + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor)) ;
        break;
    case "6":
        alert("PRODUCTO" + " " + entrada + "FORMA DE PAGO" + " " + pago + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor));
        break;
    case "12":
        alert("PRODUCTO" + " " + entrada + "FORMA DE PAGO" + " " + pago + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor));
        break;    
    default:
        break;
    }

    //ARRAY, GUARDA DATOS DE LA COMPRA RELIAZADA 
    const compra = [];

    compra.push ("PRODUCTO" + " " + entrada + "FORMA DE PAGO" + " " + pago + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor))
    
    console.log(compra);
}










