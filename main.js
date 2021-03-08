const Animal = new Object({
    ver_animal() {
        return `Animal: ${this.getnombre}, Especie: ${this.getespecie}, color: ${this.getcolor}, Raza: ${this.getraza}`;
    }
});
const obj_animal = Animal.__proto__;
obj_animal.constructor ={raza: "Doberman", especie: "Perro", color:"Negro", nombre: "Zeus"};
Animal.__defineSetter__('setnombre', 
    function(p1) {
        obj_animal.constructor.nombre = p1;
    }
)
Animal.__defineSetter__('setraza', 
    function(p2) {
        obj_animal.constructor.raza =p2;
    }
)
Animal.__defineSetter__('setespecie', 
    function(p3) {
        obj_animal.constructor.especie = p3;
    }
)
Animal.__defineSetter__('setcolor', 
    function(p4) {
        obj_animal.constructor.color =p4;
    }
)


Animal.__defineGetter__('getnombre',
    function() {
        return obj_animal.constructor.nombre;
        
    }
)
Animal.__defineGetter__('getraza',
    function() {
        return obj_animal.constructor.raza;
    }
)
Animal.__defineGetter__('getespecie',
    function() {
        return obj_animal.constructor.especie;
    }
)
Animal.__defineGetter__('getcolor',
    function() {
        return obj_animal.constructor.color;
    }
)

console.warn(`Ejercicio objetos`);

console.log(Animal.ver_animal());
Animal.setnombre = "Zaki";
Animal.setraza = "Huskee";
Animal.setespecie = "Perro";
Animal.setcolor = "Negro";

console.log(Animal.ver_animal());

//console.log(`Mi ${obj_animal.constructor.especie} se llama ${obj_animal.constructor.nombre} y es un ${obj_animal.constructor.raza} de color ${obj_animal.constructor.color}`);
