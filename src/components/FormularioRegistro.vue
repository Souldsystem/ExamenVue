<template>
  <div class="container">
    <h1>Formulario de Registro</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          id="nombre"
          v-model="nombre"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input
          id="correo"
          v-model="correo"
          type="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="contrasena" class="form-label">Contraseña</label>
        <input
          id="contrasena"
          v-model="contrasena"
          type="password"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="repetirContrasena" class="form-label">Repetir Contraseña</label>
        <input
          id="repetirContrasena"
          v-model="repetirContrasena"
          type="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      correo: "",
      contrasena: "",
      repetirContrasena: "",
    };
  },
  methods: {
    enviarFormulario() {
      if (
        this.nombre &&
        this.correo &&
        this.contrasena &&
        this.repetirContrasena
      ) {
        if (this.contrasena === this.repetirContrasena) {
          alert("El registro se ha realizado correctamente");
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor, complete todos los campos");
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
}
</style>
