<template>
  <!-- Nampilin UI disini -->
  <NavBar />
  <router-view/>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import TodoList from "./components/TodoList.vue"

  export default {
    name: "App",
    components: {
      NavBar,
      TodoList
    },
  };
</script>
