<script>
    import { mapStores,mapActions , mapState } from 'pinia';
    import { useCounterStore } from '../stores/counter';
    export default {
      computed: {
        ...mapStores(useCounterStore),
        ...mapState(useCounterStore, ["count" , "doubleCount"])
      },
      methods:{
        ...mapActions(useCounterStore, ["decrement"])
      }
    }
    </script>
    <template>
      <div class="about">
        <h1>Valores</h1>
        <br>
        Valor <h2>{{count}}</h2>
        <hr />
        Dobro do valor<h2>{{doubleCount}}</h2>
        <hr />
        <button @click="decrement">Diminuir</button>
      </div>
    </template>

<style scoped>
    div{
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

  h2{
    color: coral;
  }

  button{
    margin: 8px;
    padding: 5px;
    background-color: cadetblue;
  }

  input{
    padding-right: 100px;
    background-color: rgb(144, 235, 238);
  }
</style>