<template>
    <div>
        <v-app-bar class="ma-auto   md-4 xs-12" color="blue darken-3" elevate-on-scroll dark dense fixed>
            <v-toolbar-title>Header</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-row md="8" xs="12" >
                <v-col cols="3">
                        <v-tab rounded to="/"  style="color:white;" exact>
                          
                                Home
                            
                        </v-tab>
                </v-col>
                <v-col cols="3">
                    <v-tab to="/user"  style="color:white;" >
                            User 
                    </v-tab>
                </v-col>
               
            </v-row>
            <v-spacer></v-spacer>
        </v-app-bar>
        <br>
        <br>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>