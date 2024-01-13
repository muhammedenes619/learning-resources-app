<template >
    <div>
        <base-card>
            <base-button :mode="storedResourceButtonMode" @click="selectedTab='stored-resources'">Stored Resources</base-button>
            <base-button :mode="addResourceButtonMode" @click="selectedTab='add-resource'">Add Resources</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab" ></component>
        </keep-alive>
        
    </div>
</template>
<script>
import  StoredResources  from "./StoredResources.vue";
import  AddResource  from "./AddResource.vue";

export default {
    components:{
         StoredResources,
         AddResource,
    },
    computed:{
        addResourceButtonMode(){
            return this.selectedTab!=='add-resource'?'flat':null
        },
        storedResourceButtonMode(){
            return this.selectedTab!=='stored-resources'?'flat':null
        }
    },
    data() {
        return {
            selectedTab:'stored-resources',

            storedResources:[{
                id:'testId',
                title:'Vue js',
                description:'vue js documentation',
                link:'https://vuejs.org'
            },
            {
                id:'googleId',
                title:'google',
                description:'google js documentation',
                link:'https://google.com'
            }]
        }
    },
    methods: {
        addNewResource(newResource){
            this.storedResources.unshift(newResource)
            this.selectedTab='stored-resources'
        },
        deleteResource(targetId){
            console.log('delete',targetId);
            let targetedResourcesIndex=this.storedResources.findIndex(res=> res.id===targetId)
            this.storedResources.splice(targetedResourcesIndex,1)
        },
    },
    provide(){
        return{
            storedResources:this.storedResources,
            addNewResource:this.addNewResource,
            deleteResource:this.deleteResource,
        }
    }
}
</script>
<style scoped>
    
</style>