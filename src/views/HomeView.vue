<template>
  <div class="home container">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <todo-list></todo-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList
  }
}
</script>