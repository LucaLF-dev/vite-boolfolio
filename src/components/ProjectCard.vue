<template>
	
		<div class="card card-project">
			<h1>{{ project.title }}</h1>
			<h3>{{ project.type.name }}</h3>
			<router-link :to="{ name: 'portfolio.show', params: { slug: project.slug }}">leggi</router-link>
		</div>
	
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    components: { RouterLink }
};
</script>

<style lang="scss" scoped>

.card.card-project {
	padding: 40px;
	border-radius: 12px;
	background: #dedede;
}
</style>
