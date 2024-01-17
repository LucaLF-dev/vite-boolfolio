<template>
	
		<div class="card card-project">
			<h1>{{ project.title }}</h1>
			<h3>{{ project.type.name }}</h3>
			<route-link :to="{ name:'portfolio.show', params: { slug: project.slug}}"> leggi la descrizione</route-link> 
		</div>
	
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>

.card.card-project {
	padding: 40px;
	border-radius: 12px;
	background: #dedede;
}
</style>
