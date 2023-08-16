import { articles } from '$db/articles';
/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const data = await articles.find({}).toArray();
	console.log(data);
	return {
		articles: JSON.parse(JSON.stringify(data))
	};
}
