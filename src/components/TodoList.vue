<template>
 <div class="container">
     <label>User: {{username}}</label>
     <input type="text" class="todo-input" placeholder="Create new task" v-model="newTodo" @keyup.enter="addTodo">
     <transition-group name="fade" enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown" mode="out-in">
     <todo-item v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaining" @removedTodo="removeTodo" @finishedEdit="finishedEdit">
     </todo-item>
     </transition-group>

    <div class="extra-container">
        <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos" class="checkAll">Check All</label></div>
        <div>{{ remaining }} items left</div>

    </div>

    <div class="extra-container">
        <div>
            <button :class="{ active: filter == 'all'}" @click="filter = 'all'">All</button>
            <button :class="{ active: filter == 'active'}" @click="filter = 'active'">Active</button>
            <button :class="{ active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
        </div>

        <div>
            <transition name="fade">
            <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
            </transition>
        </div>
    </div>

 </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TO-DO APP',
  components: {
      TodoItem,
  },
  data () {
      return {
          newTodo: '',
          idForTodo: 3,
          username: this.$store.state.username,
          beforeEditCache: '',
          filter: 'all',
          /* todos: [
              {
                  'id': 1,
                  'title': 'Finish Vue Screencast',
                  'author': 'admin',
                  'completed': false,
                  'editing': false,
              },
              {
                  'id': 2,
                  'title': 'Take over world',
                  'completed': false,
                  'author': 'admin',
                  'editing': false,
              },
              {
                  'id': 3,
                  'title': 'Take over minecraft',
                  'completed': false,
                  'author': 'admin',
                  'editing': false,
              }
          ] */
      }
  },
  computed: {
      remaining() {
          return this.$store.state.todos.filter(todo => !todo.completed).length
      },
      anyRemaining() {
          return this.remaining != 0
      },
      todosFiltered() {
          if (this.filter == 'all') {
              return this.$store.state.todos
          } else if (this.filter == 'active') {
              return this.$store.state.todos.filter(todo => !todo.completed)
          } else if (this.filter == 'completed') {
              return this.$store.state.todos.filter(todo => todo.completed)
          }
          return this.$store.state.todos
      },
      showClearCompletedButton() {
          return this.$store.state.todos.filter(todo => todo.completed).length > 0
      }
  },
  directives: {
      focus: {
          inserted: function (el) {
              el.focus()
          }
      }
  },
  methods: {
      addTodo() {
          if (this.newTodo.trim().length == 0) {
              return
          }
          this.$store.state.todos.push({
              id: this.idForTodo,
              title: this.newTodo,
              author: this.$store.state.username,
              completed: false,
          })
          this.newTodo = ''
          this.idForTodo++
      },
      removeTodo(index) {
          this.$store.state.todos.splice(index, 1)
      },
      editTodo(todo) {
          this.beforeEditCache = todo.title
          todo.editing = true
      },
      doneEdit(todo) {
            if (todo.title.trim() == '') {
              todo.title = this.beforeEditCache
            }
          todo.editing = false
      },
      cancelEdit(todo) {
          todo.title = this.beforeEditCache
          todo.editing = false
      },
      checkAllTodos() {
          this.$store.state.todos.forEach((todo) => todo.completed = event.target.checked)
      },
      clearCompleted() {
          this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.completed)
      },
      finishedEdit(data) {
          this.$store.state.todos.splice(data.index, 1, data.todo)
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

label {
    font-size: 18px;
}

.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16;
    &:focus {
        outline: 0;
    }
}

.todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
}

.remove-item, .edit-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
        color: black;
    }
}
.container {
    max-width: 600px;
}

.todo-item-left {
    display: flex;
    align-items: center;
}

.todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
}

.todo-item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;

    &:focus {
        outline: none;
    }
}

.completed {
        text-decoration: line-through;
        color: grey;
}

.extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
}

button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    padding: 4px;

    &:hover {
        background: lightgreen;
    }

    &:focus {
        outline: none;
    }
}

.active {
    background: lightgreen;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>
