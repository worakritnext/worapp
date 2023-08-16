<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.article);
</script>

<div class="h1 text-2xl text-center">
	{data.article.title}
</div>
<div class="m-4">
	{@html data.article.content}
</div>
