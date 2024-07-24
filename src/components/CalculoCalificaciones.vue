<template>
  <div class="container">
    <h1>Cálculo de Calificaciones</h1>
    <form @submit.prevent="calcularPromedio">
      <div class="mb-3">
        <label for="nota1" class="form-label">Nota 1</label>
        <input
          id="nota1"
          v-model.number="nota1"
          type="number"
          class="form-control"
          min="10"
          max="70"
          required
        />
      </div>
      <div class="mb-3">
        <label for="nota2" class="form-label">Nota 2</label>
        <input
          id="nota2"
          v-model.number="nota2"
          type="number"
          class="form-control"
          min="10"
          max="70"
          required
        />
      </div>
      <div class="mb-3">
        <label for="nota3" class="form-label">Nota 3</label>
        <input
          id="nota3"
          v-model.number="nota3"
          type="number"
          class="form-control"
          min="10"
          max="70"
          required
        />
      </div>
      <div class="mb-3">
        <label for="asistencia" class="form-label">Asistencia (%)</label>
        <input
          id="asistencia"
          v-model.number="asistencia"
          type="number"
          class="form-control"
          min="0"
          max="100"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>
    <h1 v-if="mensaje" :style="{ color: colorMensaje }">{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      mensaje: "",
      colorMensaje: "black",
    };
  },
  methods: {
    calcularPromedio() {
      if (
        this.nota1 < 10 ||
        this.nota1 > 70 ||
        this.nota2 < 10 ||
        this.nota2 > 70 ||
        this.nota3 < 10 ||
        this.nota3 > 70 ||
        this.asistencia < 0 ||
        this.asistencia > 100
      ) {
        this.mensaje = "Por favor, ingrese valores válidos para las notas y la asistencia";
        this.colorMensaje = "red";
        return;
      }

      const promedio = this.nota1 * 0.35 + this.nota2 * 0.35 + this.nota3 * 0.3;

      if (promedio >= 40 && this.asistencia >= 80) {
        this.mensaje = `El promedio es: ${promedio.toFixed(2)}, tu estado es: Aprobado`;
        this.colorMensaje = "green";
      } else {
        this.mensaje = `El promedio es: ${promedio.toFixed(2)}, tu estado es: Reprobado`;
        this.colorMensaje = "red";
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
