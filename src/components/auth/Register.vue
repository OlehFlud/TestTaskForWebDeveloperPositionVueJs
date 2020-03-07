<template>
    <div class="login-form">
        <h2 class="login-heading">Register</h2>
        <form action="#" @submit.prevent="register">

            <div class="form-control">
                <label for="username">username</label>
                <input type="text" name="username" id="username" class="login-input" v-model="username">
            </div>

            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="login-input" v-model="email">
            </div>

            <div class="form-control mb-more">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="login-input" v-model="password">
            </div>
            <div class="form-control mb-more">
                <label for="bio">Bio</label>
                <input type="text" name="bio" id="bio" class="login-input" v-model="bio">
            </div>

            <div class="form-control">
                <button type="submit" class="btn-submit">Create Account</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                email: '',
                password: '',
                bio: ''
            }
        },
        methods: {
            register() {

                this.$store.dispatch('register', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    bio: this.bio
                })
                    .then(response => {
                        this.$router.push({path: 'login'});
                        console.log(response);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
