<template>
 <transition appear enter-active-class="animated fadeInLeftBig"  mode="out-in">
    <v-row>
        <v-col>
            <h1>
                Oops, Your Page is not found !
            </h1>
            <br>
            <p>You will navigate back home automatically after <strong> {{counter}} </strong> seconds.</p>
        </v-col>
    </v-row>
 </transition>
</template>

<script>
    export default {
        data() {
            return {
                counter: 5,
            }
        },
        mounted() {
            setInterval(() => {
                this.counter--;
            }, 1000)
            setTimeout(() => {
                this.$router.push({
                    path: '/'
                })
            }, 5000)
        }
    }
</script>

<style scoped>
  
</style>