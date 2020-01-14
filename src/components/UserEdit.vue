<template>
    <div>
        <h3>Edit the User </h3>
        <p>Locale: {{$route.query.locale}} </p>
        <p>Analytics: {{$route.query.q}} </p>
        <v-btn @click="isConfirmed = true;" class="primary">Confirm</v-btn>
        <div style="height:700px;"> </div>
        <p id="data">Some Extra Data.</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isConfirmed: false
            }
        },
        methods: {

        },
        beforeRouteLeave(to, from, next) {
            if (this.isConfirmed) {
                next();
            } else {
                if (confirm('Are You Sure ?')) {
                    next();
                } else {
                    next(false);
                }
            }
        },
    }
</script>
<style scoped>

</style>