
<template>
	
    <div >
        <div class="container">
            <p>titolo</p>
        <h1>{{  project.title }}</h1>
        <h3>{{ project.slug }}</h3>
        <p>{{ project.description }}</p>
         <ul class="types">
            <li v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}</li>
        </ul> 
        
        </div>

  </div>
</template>

<script>
import axios from 'axios'
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
methods: {
    fetchProject() {
      // axios.get(`${this.BASE_URL}/projects/${this.$route.params.slug}`)
      axios.get(`${this.BASE_URL}/projects/${this.slug}`)
      .then(res => {
        // console.log(res.data.project)
        this.project = res.data.project
       })//.catch((error) => {
        

    //     if(error.response.status === 404) {
    //       this.$router.push({ name: 'not-found' })
    //     }
    //   })
    }
},
created() {
    this.fetchProject()
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