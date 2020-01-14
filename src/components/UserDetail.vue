<template>
    <div>
        <div>
            <h3>Some User Details.</h3>
            <p>User Loaded : {{ $route.params.id }} </p>
            <!-- one way to user params -->
            <!-- <router-link tag="button" :to="`/user/${$route.params.id}/edit`" class="primary" dark >Edit User</router-link> -->
            <v-btn :to="link" class="primary" dark>Edit User</v-btn>
            <!-- the vuetify way to router links -->
            <!-- <v-btn :to="`/user/${$route.params.id}/edit`">Edit User</v-btn> -->
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100,
                    },
                    // follows the scrolling behavior to the same id
                    hash: '#data',

                }
            }
        },
        beforeRouteEnter(to, from, next) {

            // if next would not attached to this hook the component will not created.
            // ? authentication example;
            // if(true) {
            //     next()
            // }
            //  else {
            //      next(false)
            //  }
            next();
        }
    }
</script>

<style scoped>

</style>