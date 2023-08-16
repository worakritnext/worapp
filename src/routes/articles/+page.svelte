<script>
	// your script goes here
	export let data;
	console.log(data.articles);
</script>

{#each data.articles as article}
	<ion-card href="/articles/{article._id}" color="primary">
		<ion-card-header>
			<ion-card-title>{article.title}</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			{article.content}
		</ion-card-content>
	</ion-card>
{/each}

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
