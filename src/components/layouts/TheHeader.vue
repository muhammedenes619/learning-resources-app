<template>
    <div>
        <header>
            <slot>
                <h1>Remember These Resources</h1>
            </slot>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>