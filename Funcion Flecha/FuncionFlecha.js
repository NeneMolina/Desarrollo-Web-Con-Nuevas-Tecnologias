let frutas = ["Manzana","Fresa","Mandarina","Pera"];

const ModificarFrutas = (frutas) => {
    //Agregamos elementos en una posicion dada
    frutas.splice(3,0,"Naranja","Papaya","melocoton");
    //Agregamos un elemento en la ultima posicion
    frutas.push("Coco");
    //Eliminamos el ultimo elemento
    frutas.pop();
    //Añadimos un elemento al principio
    frutas.unshift("Mango");
} 

ModificarFrutas(frutas);

console.log(frutas);