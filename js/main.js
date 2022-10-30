const { createApp } = Vue

 createApp({
    data() {
      return {
        usuarios: [
            {nombre: '',
            email: '',
            contraseña: '',  
        }
        ]

      }
    },
    created() {


    },
    mounted() {

    },
    //funciones
    methods: {

    },

    computed: {

    },
  }).mount('#app')
