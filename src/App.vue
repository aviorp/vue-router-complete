<template>
  <v-app>
    <v-row>
      <v-col class="text-center mb-4 xs-12">
        <router-view name="header-top" ></router-view>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import Header from './components/Header';
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
 *{
   font-family: 'Rubik' , sans-serif;
 }
</style>