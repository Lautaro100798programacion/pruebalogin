const { createApp } = Vue

 createApp({
    data() {
      return {
        usuarios:
            {nombre: [],
            email: [],
            contrasena: [],  
        },
        registrados: [],
        login:
        {nombre: [],
          email: [],
          contrasena: [],  
        },

      }
    },
    created() {


    },
    mounted() {

    },
    //funciones
    methods: {
      objeto() {
        this.registrados.push(this.usuarios)
        // console.log(this.registrados)
      }
      
    },

    computed: {

    },
  }).mount('#app')
