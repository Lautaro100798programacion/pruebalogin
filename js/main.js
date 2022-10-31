const {
  createApp
} = Vue

createApp({
  data() {
    return {
      //registro
      usuarios: {
        nombre: [],
        email: [],
        contrasena: [],
        palabraderecuperacion: []
      },
      registrados: [],
      //ingreso
      login: {
        nombre: [],
        email: [],
        contrasena: [],
      },
      datosguardados: JSON.parse(localStorage.getItem('registrados')),
      //recuperacion
      mailrecuperacion: [],
      palabrarecuperacion: [],
      recuperar: ["0"],


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
      localStorage.setItem('registrados', JSON.stringify(this.registrados));
      // console.log(this.registrados)
      window.location = "./login.html"
    },
    ingreso() {
      let datosguardados = JSON.parse(localStorage.getItem('registrados'))
      if (this.login.nombre == this.datosguardados[0].nombre && this.login.email == this.datosguardados[0].email && this.login.contrasena == this.datosguardados[0].contrasena) {
        // alert("Bienvenido a 101patita")
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Bienvenido a 101Patita',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(this.crearcuenta, 4000)
      } else {
        alert("Los datos ingresados son incorrectos. Verifique los datos ingresados")
      }
    },
    crearcuenta(){
      window.location = "./creaciondecuenta.html"
    },
    logino() {
      this.recuperar.pop()
      this.recuperar.push("2")
      window.location = "./login.html"
    },
    recuperarclave() {
      window.location = "./recuperarclave.html"
    },
    verificacion() {
      if (this.mailrecuperacion == this.datosguardados[0].email && this.palabrarecuperacion == this.datosguardados[0].palabraderecuperacion) {
        this.recuperar.pop()
        this.recuperar.push("1")
      } else {
        alert("Datos incorrectos. Verifique los datos ingresados")
      }
    }



  },

  computed: {

  },
}).mount('#app')