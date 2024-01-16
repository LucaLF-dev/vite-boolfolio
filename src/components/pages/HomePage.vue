
<template>
	
    <div class="container">
        <h1 class="name">{{ name }}</h1>
        <h2 class="job">{{ job }}</h2>
        <p class="description">{{ description }}</p>
    </div>

</template>

<script>
export default {
data() {
    return {
        name: 'Luca',
        job: 'Web Developer',
        description: 'Un quasi, Web Developer, alle prime armi.'
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