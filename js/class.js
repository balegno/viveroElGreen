// class Productos {
//     constructor(id, nomCient, nomCom, preCh, preM, preGr, imagen){
//         this.id = id,
//         this.cientifico = nomCient,
//         this.comun = nomCom,
//         this.pCh = preCh,
//         this.pM = preM,
//         this.pGr = preGr,
//         this.img = imagen,
//         this.cantidad = 1
//     }
//     // metodo
//     sumarUnidad(){
//         this.cantidad = this.cantidad +1
//         return this.cantidad
//     }
//     restarUnidad(){
//         this.cantidad = this.cantidad -1
//         return this.cantidad
//     }
// }


// let productos = []

// const cargarProductos = async ()=>{
//     const response = await fetch("productos.json")
//     const data = await response.json()
//     for(let productos of data){
//         let mercaderia = new Productos(productos.id, productos.nomCient, productos.nomCom, productos.preCh, productos.preM, productos.preGr, productos.img)
//         productos.push(mercaderia)
//     }
//     localStorage.setItem("productos", JSON.stringify(productos))


// }
// if(localStorage.getItem("productos")){

//     for(let productos of JSON.parse(localStorage.getItem("estanteria"))){
//         let mercaderia = new Productos(productos.id, productos.nomCient, productos.nomCom, productos.preCh, productos.preM, productos.preGr, productos.img)
//         productos.push(mercaderia)
//     }

// }else{
//     localStorage.setItem("productos", JSON.stringify(productos))
// }



function saludar(nombre){
    return `hola ${nombre}`
}
function Edades(edad){
    if(edad >=18){
        return"sos mayor"
    }return"sos Menor"
}

function saludarEdad (nombre,edad){
    const saldr= saludar(nombre)
    const Mayorr = Edades(edad)
    return`${saldr} ${Mayorr}`
}

console.log(saludarEdad("fede",22))
console.log(saludarEdad("pedro",10))



