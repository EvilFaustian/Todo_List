<template>
<div id="secure">
    <div id="app">
        <ul class="nav">
            <li><router-link :to="{ name: 'home'}">Home</router-link></li>
            <li><router-link :to="{ name: 'archivio'}">Archivio</router-link></li>
            <li><router-link :to="{ name: 'login'}">Login</router-link></li>
        </ul>

        <div class="container">
          <router-view></router-view>
        </div>
        
    </div>
</div>
</template>


<script>
export default {
  name: "MainMaster",
  props: {
    username234: {
      type:String,
      default: ''
    }
  },
  data() {
    return {
      userdata: {
      username: "",
      }
    }
  },
  methods: {
    checkLogin() {

    }
  }
}

</script>

<style lang="scss">
.container {
  margin: auto;
  max-width: 600px;
  padding: 10px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 24px;
    height: 100vh;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: center;
    background: #F5F8FA;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 24px;
  }
  .nav a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
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
    margin: 1px;

    &:hover {
        background: lightgreen;
    }

    &:focus {
        outline: none;
    }
}

.checkAll {
  margin-right: 5px;
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