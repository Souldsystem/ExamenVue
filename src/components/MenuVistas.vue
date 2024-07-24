<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Programacion Front End</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Cálculo de Calificaciones</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registro" class="nav-link">Formulario de Registro</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuVistas'
}
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
