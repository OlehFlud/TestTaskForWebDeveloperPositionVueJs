<template>
    <div id="home">
        <button class="btn-logout" v-on:click="created">LogOut</button>
        <h1>Users</h1>
        <ul>
            <li class="userList" v-for="user of users" :key="user.id">

                <td class="List">{{user.username}}</td>
                <td class="List">{{user.email}}</td>
                <td class="List">{{user.bio}}</td>

            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios';

    const baseURL = `http://localhost:5000/users/findAllUser`;
    export default {
        name: 'home',
        data: function () {
            return {
                users: [],
                usersName: ''
            };
        },
        async created() {
            try {
                const res = await axios.get(baseURL);
                this.users = res.data;

            } catch (e) {
                console.log(e);
            }
        },
        methods: {

            created() {
                this.$store.dispatch('destroyToken')
                    .then(response => {
                        this.$router.push({path: 'login'});
                        console.log(response);
                    })
            }
        }
    }
</script>
