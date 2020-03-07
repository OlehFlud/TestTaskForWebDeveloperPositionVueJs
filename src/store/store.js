import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:5000/users';

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    actions: {

        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/signup', {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    bio: data.bio,
                })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        alert('Something went wrong');
                        reject(error)
                    })
            })
        },
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
            localStorage.removeItem('access_token');
            context.commit('destroyToken');
        },
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    email: credentials.email,
                    password: credentials.password,
                })
                    .then(response => {
                        const token = response.data.access_token;
                        localStorage.setItem('access_token', token);
                        context.commit('retrieveToken', token);
                        resolve(response)
                        // console.log(response);
                    })
                    .catch(error => {
                        alert('Something went wrong');
                        reject(error)
                    })
            })
        },
    }
});
