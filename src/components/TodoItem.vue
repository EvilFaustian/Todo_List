<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="doneEdit" />
      <div
        v-if="!editing"
        @dblclick="editTodo"
        class="todo-item-label"
        :class="{ completed: completed }"
      >
        {{ title }}
      </div>
      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        v-focus
      />
    </div>
    <label class="username">By {{author}}</label>
    <div>
      <div class="edit-item action-item" @click="editTodo"> &#9998; </div>
      <div class="remove-item action-item" @click="removeTodo(index)">
        &times;
      </div>
      <div class="edit-item action-item" @click="archiviaTodo(); removeTodo(index);"> &#128190; </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: this.$store.state.username,
      id: this.todo.id,
      author: this.todo.author,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: '',
    }
  },
  watch: {
    checkAll() {
      /* if (this.checkAll) {
                this.completed = true
            } else {
                this.completed = this.todo.completed
            } */
      this.completed = this.checkAll ? true : this.todo.completed;
        }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    },
  methods: {
    removeTodo(index) {
      this.$emit("removedTodo", index)
    },
    editTodo() {
      this.beforeEditCache = this.title
      this.editing = true
    },
    archiviaTodo() {
        this.$store.state.archiviaTodo.push({
            username: this.author,
            id: this.todo.id,
            author: this.todo.author,
            title: this.todo.title,
            completed: this.todo.completed,
        })
        console.log(this.$store.state.archiviaTodo[0].title)
    },
    doneEdit() {
      if (this.title.trim() == '') {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          author: this.$store.state.username,
          completed: this.completed,
          editing: this.editing,
        },
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
  },
};
</script>

<style lang="scss">
    .username {
        font-size: 12px;
        color: gray;
    }
</style>
