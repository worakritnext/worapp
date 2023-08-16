<script>
	import '../app.postcss';
</script>

<body>
	<div class="shadow-md p-4 space-x-2">
		<a href="/">Home</a>
		<a href="/articles">Articles</a>
	</div>

	<slot><!-- optional fallback --></slot>
</body>
