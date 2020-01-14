<template>
    <transition appear enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut" mode="out-in">
        <v-row>
            <v-col>
                <h1>User Component.</h1>
                <br>
                <hr>

                <br><br>
                <!-- <p>Loaded ID: {{ id }}  </p> -->
                <router-view></router-view>
                <br><br>
                <v-btn @click="navigateToHome">Go To Home</v-btn>
            </v-col>
        </v-row>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                // ! access to url's params
                // id: this.$route.params.id
            }
        },
        // watch:{
        //  '$route'(to,from) {
        //      this.id = to.params.id;
        //  }
        // },
        methods: {
            // navigation from code
            navigateToHome() {
                this.$router.push({
                    name: 'home'
                })
            }
        }
    }
</script>