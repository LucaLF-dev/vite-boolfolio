
<script>
  import axios from 'axios';
  import ProjectCard from '../../ProjectCard.vue';
  
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [],
        BASE_URL: 'http://127.0.0.1:8000/api'
      }
    },
    methods: {
      fetchPosts() {
        axios.get(`${this.BASE_URL}/projects`)
        .then((res) => {
          console.log(res.data.results)
          this.projects = res.data.results
        })
      }
    },
    created() {
      this.fetchPosts()
    }
  }
  </script>

<template>
    <div>
      <div class="container">
        <h1>
          I nostri Progetti
        </h1>
      </div>
      <div class="container">
      <div class="grid">
        <ProjectCard class="card project-card" v-for="project in projects" :project="project" :key="project.id" />
      </div>
    </div>

    </div>
  </template>
  
  
  
  <style lang="scss" scoped>
  .grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4,1fr);
  }
  </style>