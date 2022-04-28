var app = new Vue ({
    el: "#app",
    data: {
        mostrarParrafo: true,
        mostrarParrafo2: true,
        contador:0,
        mensajeBienvenida: "Bienvenido tutor a mi primer programa en VueJS!!!!",
    },
    methods: {

        toggleMas(){
            this.contador=this.contador+1
            console.log('sumaste!')
        },
        toggleMenos(){
            this.contador=this.contador-1
            console.log('restaste!')
        },

        toggleParrafo(){
            this.mostrarParrafo = !this.mostrarParrafo
            console.log('TOGGLE')
        },
      
    }
}) 