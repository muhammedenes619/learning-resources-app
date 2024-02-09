<template>
  <div>
    <base-card>
      <div class="buttons-holder">
        <router-link to="/"> Stored Resources </router-link>
        <router-link to="/add-resources">Add Resource</router-link>
      </div>

      <!-- <base-button
        :mode="storedResourceButtonMode"
        @click="selectedTab = 'stored-resources'"
        >Stored Resources</base-button
      >
      <base-button
        :mode="addResourceButtonMode"
        @click="selectedTab = 'add-resource'"
        >Add Resources</base-button
      >
      -->
    </base-card>
    <router-view></router-view>
    <!-- <component :is="selectedTab" ></component> -->
  </div>
</template>
<script>
export default {
  computed: {
    addResourceButtonMode() {
      return this.selectedTab !== "add-resource" ? "flat" : null;
    },
    storedResourceButtonMode() {
      return this.selectedTab !== "stored-resources" ? "flat" : null;
    },
  },
  data() {
    return {
      selectedTab: "stored-resources",

      storedResources: [
        {
          id: "testId",
          title: "Vue js",
          description: "vue js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "googleId",
          title: "google",
          description: "google js documentation",
          link: "https://google.com",
        },
      ],
    };
  },
  methods: {
    addNewResource(newResource) {
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(targetId) {
      console.log("delete", targetId);
      let targetedResourcesIndex = this.storedResources.findIndex(
        (res) => res.id === targetId
      );
      this.storedResources.splice(targetedResourcesIndex, 1);
    },
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addNewResource: this.addNewResource,
      deleteResource: this.deleteResource,
    };
  },
};
</script>
<style scoped>
.buttons-holder {
  display: inline-block;
  padding: 10px;
}
a {
  all: unset;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: white;
  border: 1px solid #640032;
  color: #640032;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;
  margin: 5px;
  font-size: 0.8rem;
}

a:hover,
a:active,
a.router-link-active {
  background-color: #640032;
  border-color: #640032;
  color: white;
}
</style>
