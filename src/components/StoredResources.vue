<template>
    <ul>
        <li v-for="resource in storedResources" :key="resource.id">
            <single-resource 
            :id="resource.id" 
            :title="resource.title" 
            :description="resource.description"
            :link="resource.link"> </single-resource>
        </li>
    </ul>
    
</template>
<script>
import  SingleResource  from "./SingleResource.vue";
export default {
    inject:['storedResources'],
    components:{
        SingleResource
    },
    
}
</script>
<style scoped>
    ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>