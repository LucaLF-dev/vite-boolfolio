<template>
	<header>
		<div class="container">
			<nav>
				<ul class="link_list">
					<li>
						<router-link :to="{ name: 'home' }">Home</router-link>
					</li>
					<li>
                        <router-link :to="{ name: 'projects.index'}">Progetti</router-link>
                    </li>
					<li>
						<router-link :to="{ name: 'contacts' }">Contatti</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link_list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    gap: 10px;
    padding: 30px 0;
}

</style>
