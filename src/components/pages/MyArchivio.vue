<template>
    <div class="container">
        <div class="search">
            <select name="" id="" @change="searchName" v-model.trim="selectedOption">
            <option value="">Search by Name</option>
            <option :value="todo.author" v-for="todo in filter" :key="todo.title" @click="filterByName">{{todo.author}}</option>
            </select><input type="search" placeholder="Search" @focus="searchText" @change="searchText" v-model.trim="searchOption">
         </div>
        
        <div class="displayArchiviati">
            <transition-group name="fade" enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown" mode="out-in">
                <div v-for="(todo, index) in filterName" :key="todo.id" :index="index">
                    <div class="todo-item">
                        <div class="todo-item-left">
                        <input type="checkbox" v-model="todo.completed" @change="doneEdit" />
                        <div
                            v-if="!this.$store.state.todos.editing"
                            @dblclick="editTodo"
                            class="todo-item-label"
                            :class="{ completed: todo.completed }"
                        >
                            {{ todo.title }}
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
                        <label class="authorname">By {{todo.author}}</label>
                        <div>
                        <div class="remove-item action-item" @click="removeTodo(index)">
                            &times;
                        </div>
                        </div>
                    </div>

                </div>       
            </transition-group>  
        </div>
    </div>
</template>


<script>
export default {
    name: 'ArchivioPage',
    data: () => ({
        selectedOption: '',
        searchOption: '',
        nameSearch: 'true',
        textSearch: 'false',
    }),
    methods: {
        todosFiltered() {
              return this.$store.state.archiviaTodo
        },
        searchName() {
            this.nameSearch = true;
            this.textSearch = false;
        },
        searchText() {
            this.nameSearch = false;
            this.textSearch = true;
        },
        removeTodo(index) {
          this.$store.state.archiviaTodo.splice(index, 1)
      },
        
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
    computed: {
        filter()  {
      return [...new Map(this.$store.state.archiviaTodo.map(item => [item.author, item])).values()];
  },
  filterName: function () {
          return this.$store.state.archiviaTodo.filter((todoItem) => {
              if (this.nameSearch) {
                  return todoItem.author.toLowerCase().trim().match(this.selectedOption);
              } else if (this.textSearch) {
                  return todoItem.title.toLowerCase().trim().match(this.searchOption.toLowerCase()) || todoItem.author.toLowerCase().trim().match(this.searchOption.toLowerCase());
              }
             
          });
  }
  }
}
</script>


<style scoped lang="scss">
.container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    width: 100%;
}

.search {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

</style>