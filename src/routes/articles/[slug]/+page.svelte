<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.article);
</script>

<div class="h1 text-4xl text-center">
	{data.article.title}
</div>
<div class="m-4 text-xl">
	{@html data.article.content}

</div>
