<template>
    <div id="login" class="container">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'MyLogin',
        data() {
            return {
                input: {
                    username: "",
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "") {
                    this.$store.state.username = this.input.username
                    this.$store.state.authenticated = true;
                    this.$router.replace({name: "home"})
                    /* alert(this.$store.state.username) */
                    /* if(this.input.username == this.$parent.mockAccount.username) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username is incorrect");
                    } */
                } else {
                    console.log("A username must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {

        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        position: relative;
        top: 100px;
        margin: auto;
        padding: 20px;
        width: 320px;
    }
    button {
        padding: 5px;
    }
    input {
        padding: 3px;
        padding-top: 2px;
        font-size: 17px;
    }
    h1 {
        margin-top: -10px;
        padding-bottom: 10px;
    }
</style>