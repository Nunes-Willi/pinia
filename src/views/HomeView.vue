<script>
  import { useCounterStore } from '../stores/counter';
  import {mapStores, mapActions, mapState } from 'pinia';

  export default {
    data() {
      return{
        outro_nome: "Will",
      }
    },
    computed: {
      ...mapStores(useCounterStore),
      ...mapState(useCounterStore, ['count', 'nome']),
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', 'alterar'])
    }
  }
</script>

<template>
  <main>
    <h1>Salva Nome</h1>
    <input type="text" v-model = outro_nome>
    <br>
    <button @click="alterar(outro_nome)">Salvar</button>
    <hr />
    <h2>{{nome}}</h2>
    <hr />
    {{count}} <button @click="increment">Aumentar</button>
  </main>

</template>

<style scoped>
  main{
    background-color: beige;
    padding: 150px;
    border-radius: 50px;
    border: 2px solid black;
  }

  h1{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgba(207, 207, 6, 0.849);
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  button{
    margin: 8px;
    padding: 5px;
    background-color: cadetblue;
  }

  input{
    padding-right: 100px;
    background-color: cora;
  }
</style>
