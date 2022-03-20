<template>
    <div class="container">
        <div class="search">
            <select name="" id="" @change="selectCategory($event)">
            <option value="placeholder">Search by Name</option>
            <option value=todo.author v-for="todo in filter" :key="todo.title" @click="filterByName">{{todo.author}}</option>
            </select><input type="search" name="" id=""  placeholder="Search">
         </div>
        
        <div class="displayArchiviati">
            <div v-if="this.displayAll">
                <div v-for="(todo, index) in filter2" :key="todo.title" :index="index">
                    <div class="todo-item">
                        <div class="todo-item-left">
                        <input type="checkbox" v-model="completed" @change="doneEdit" />
                        <div
                            v-if="!editing"
                            @dblclick="editTodo"
                            class="todo-item-label"
                            :class="{ completed: completed }"
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
                        <label class="username">By {{todo.author}}</label>
                        <div>
                        <div class="remove-item action-item" @click="removeTodo(index)">
                            &times;
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div v-if="displayName"> <!-- Need to filter by name and display it!!!!!!  -->
                <div v-for="(todo, index) in this.$store.state.archiviaTodo" :key="todo.title" :index="index">
                    <div class="todo-item">
                        <div class="todo-item-left">
                        <input type="checkbox" v-model="completed" @change="doneEdit" />
                        <div
                            v-if="!editing"
                            @dblclick="editTodo"
                            class="todo-item-label"
                            :class="{ completed: completed }"
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
                        <label class="username">By {{todo.author}}</label>
                        <div>
                        <div class="remove-item action-item" @click="removeTodo(index)">
                            &times;
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div v-if="displayText">
                <div v-for="(todo, index) in this.$store.state.archiviaTodo" :key="todo.title" :index="index">
                    <div class="todo-item">
                        <div class="todo-item-left">
                        <input type="checkbox" v-model="completed" @change="doneEdit" />
                        <div
                            v-if="!editing"
                            @dblclick="editTodo"
                            class="todo-item-label"
                            :class="{ completed: completed }"
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
                        <label class="username">By {{todo.author}}</label>
                        <div>
                        <div class="remove-item action-item" @click="removeTodo(index)">
                            &times;
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        
                    
        </div>
    </div>
</template>


<script>
export default {
    name: 'ArchivioPage',
    data() {
        return {
            displayAll: true,
            displayName: false,
            displayText: false
        }
    },
    methods: {
        filterByName() {
            alert(this.value)
        },
        todosFiltered() {
              return this.$store.state.archiviaTodo
        },
        selectCategory(event) {
            alert(event.target.value);
        }
        
    },
    computed: {
        filter()  {
      return [...new Map(this.$store.state.archiviaTodo.map(item => [item.author, item])).values()];
  },
  filter2()  {
      return [...new Map(this.$store.state.archiviaTodo.map(item => [item.author, item])).values()];
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