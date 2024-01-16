
<template>
	
    <div v-if="post">
    <div class="container">
      <h1>{{  post.title }}</h1>
      
    </div>

    
  </div>
</template>

<script>
export default {
    props: {
        slug: String
    },
data() {
    return {
        project: null,
        BASE_URL: "http://127.0.0.1:8000/api",
    }
},
methods: {}
    
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