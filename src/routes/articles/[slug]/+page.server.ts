import { articles } from '$db/articles';
import { ObjectId } from 'mongodb';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const data = await articles.findOne({ _id: new ObjectId(params.slug) });
	console.log(data);
	return {
		article: JSON.parse(JSON.stringify(data))
	};
}
