<template>
  <fieldset>
        <legend> Buscar Vuelos disponibles </legend>
         <label for="">Origen:</label>
        <input type="text" v-model="origen" />
        <label for="">Destino:</label>
        <input type="text" v-model="destino" />
        <label for="">Fecha:</label>
        <input type="text" v-model="fecha" />
        <button @click="mostrar">lista</button>

        <ul>
          <li v-for="vuel in lista" :key="vuel">
           {{vuel}}
      
         </li>

          </ul>


  </fieldset>
</template>

<script>
import{mostrarVuelo,vueloDisponible} from "../helpers/metodosClientes.js"

export default {
data(){
  return{
    origen:null,
    destino:null,
    fecha:null,
    lista:[],
    numero:null
asientoDisponible:null
asientoOcupado:null
  };

},
methods:{
  async mostrar(){
    this.lista= await mostrarVuelo(this.origen,this.destino,this.fecha);

  }
  async disponible(){
    const data = await vueloDisponible(this.numero)
    this.asientoDisponible=data.asientoDisponible;
    this.asientoOcupado=data.asientoOcupado;
  }
}
}
</script>

<style>

</style>