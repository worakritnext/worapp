import { startMongo } from '$db/mongo';

startMongo()
	.then(() => {
		console.log('Mongo Start');
	})
	.catch((e) => {
		console.error(e);
	});
