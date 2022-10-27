let pizzas = [
    {
        id: 1,
        nombre: "Hightower",
        precio: 500,
        ingredientes: ["Salsa de tomate", "Jamón Crudo", "Rúcula", "Queso Parmesano"],
    },

    {
        id: 2,
        nombre: "Targaryen",
        precio: 800,
        ingredientes: ["Salsa picante", "Peperonni", "Queso Muzzarella"]
    },

    {
        id: 3,
        nombre: "Tully",
        precio: 800,
        ingredientes: ["Salsa de tomate", "Jamón Cocido", "Queso Muzzarella", "Anchoas"],
    },

    {
        id: 4,
        nombre: "Stark",
        precio: 1000,
        ingredientes: ["Salsa de tomate", "Jamón Cocido", "Queso Muzzarella", "Huevos Fritos"],
    },

    {
        id: 5,
        nombre: "Arryn",
        precio: 500,
        ingredientes: ["Salsa picante", "Jamón Cocido", "Queso Muzzarella", "Pollo"],
    },

    {
        id: 6,
        nombre: "Lannister",
        precio: 700,
        ingredientes: ["Salsa picante", "Jamón Cocido", "Queso Muzzarella", "Aceitunas", "Tomtate"],
    }
]

const logica = {
    pizzas: pizzas,
//    a)
    buscarImpar: function (id) {
        for (let i = 0; i <= pizzas.length; i++) {
            if (id % 2 != 0) {
                return "Esta pizza tiene id Impar"

            }
            return "Esta pizza tiene id Par"

        }

    },
//    b)
    precio: function (precio) {
        return pizzas.filter(pizzas => pizzas.precio < 600)
    },
//    c)
    pizzasInfo: function (nombre) {
        for (let i = 0; i <= pizzas.length; i++) {
            if (pizzas.nombre[i] == nombre) {
                return "hola"

            }
            return "chau"
        }
        



    }
//    d)
/*     ingredientes: function (nombre)
    for (let i = 0; i <= pizzas.length; i++) {
        if (pizzas.ingredientes == nombre) {
            for (let i = 0; i <= pizzas.ingredientes.length; i++) {
                return i / pizzas.ingredientes
            }

        }
        return "chau" */


}

//a)
console.log(logica.buscarImpar())
//b)
console.log(logica.precio())
//c)
console.log(logica.pizzasInfo())
//d)
/* console.log(logica.ingredientes()) */























/* const logica = {
    pizzas:pizzas,
    buscarPizza: function(id) {
        return pizzas.find(pizzas => pizzas.id == id) || null
    }
} */