
<template>
	
    <div v-if="post">
    <div class="container">
      <h1>{{  post.title }}</h1>
      
    </div>

    
  </div>
</template>

<script>
export default {
data() {
    return {
        
    }
}
};
</script>

<style lang="scss" scoped>

.container {
    padding: 80px 0;
    text-align: center;
    
    * {
        margin-bottom: 10px;
    }
}

</style>