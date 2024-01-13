<template >
    <base-card>
        <form action="">
            <label for="title">Title</label>
            <div class="form-control">
                <input type="text" name="title" id="title" placeholder="Title" v-model="inputTitle">
            </div>
            <label for="description">Description</label>
            <div class="form-control">
                <textarea name="description" id="description" placeholder="Description" v-model="inputDescription"></textarea>
                  
            </div>
            <label for="link">Link</label>
            <div class="form-control">
                <input type="link" name="link" id="link" placeholder="Link" v-model="inputLink">
            </div>
            <base-button type="submit" @click.prevent="saveResource">Add Resource</base-button>
        </form>
    </base-card>
    <base-error v-if="dialogIsActive" @close-dialog="closeDialog">
            <template #header>
                <h2>Sorry !!</h2>
            </template>
            <template #default>
                <p>Please fill all info</p>
            </template>
            <template #actions>
                <base-button @click="closeDialog">Close</base-button>

            </template>
        </base-error>
</template>
<script>
export default {
    inject:['addNewResource'],
    data() {
        return {
            inputTitle:'',
            inputDescription:'',
            inputLink:'',
            dialogIsActive:false,
        }
    },
    methods: {
        closeDialog(){
            this.dialogIsActive=false
        },
        saveResource(){
            if (this.inputDescription.trim()===""||this.inputLink.trim()===""||this.inputTitle.trim()==="") {
                this.dialogIsActive=true
            }
            else{
                
                const resourceItem={
                    id:Date().toString(),
                    title:this.inputTitle,
                    description:this.inputDescription,
                    link:this.inputLink,
                }
                console.log(resourceItem.id);
                this.addNewResource(resourceItem)
            }
        }
    },
}
</script>
<style scoped>
    label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.60rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>