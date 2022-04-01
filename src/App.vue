<template>
   <div class="router-nav">
    <router-link to="/"></router-link> | 
    <router-link to="/casino"></router-link>
    <router-link to="/slots"></router-link>
    <router-link to="/lottery"></router-link>
    <router-link to="/number"></router-link>   
  <router-view/>
   </div>
</template>

<script>

export default {
   name:'App'
};
</script>

<style>

</style>
