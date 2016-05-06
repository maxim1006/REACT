import ArticleStore from "./ArticleStore";
import { normalizedArticles } from '../../../src/mocks/articles';

const stores = {};

window.stores = stores;

Object.assign(stores, {
   articles: new ArticleStore(stores, normalizedArticles) 
});

export default stores;
export const articleStore = stores.articles;