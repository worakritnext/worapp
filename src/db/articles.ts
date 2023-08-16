import db from "$db/mongo";

export const articles = db.collection('articles')