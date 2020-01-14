<template>
<v-container>
    <v-row>
        <v-col cols="5" class="mx-auto">
    <!-- <ul class="mx-auto" style="border : 1px solid #eee; box-shadow: 1px 2px 3px #333;">
        <router-link style="cursor:pointer;list-style:none" tag="li" to="/user/1">User 1</router-link>
        <hr>
        <router-link style="cursor:pointer;list-style:none" tag="li" to="/user/2">User 2</router-link>
        <hr>
        <router-link style="cursor:pointer;list-style:none" tag="li" to="/user/3">User 3</router-link>   
    </ul> -->
    <v-list>
        <v-list-item to="/user/1">User 1</v-list-item>
        <v-list-item to="/user/2">User 2</v-list-item>
        <v-list-item to="/user/3">User 3</v-list-item>
    </v-list>
</v-col>
    </v-row>
    </v-container>
</template>