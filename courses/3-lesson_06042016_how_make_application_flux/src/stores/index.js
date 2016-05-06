//тут собираю все сторы и инициализирую

import ArticleStore from "./ArticleStore";
import CommentStore from "./CommentStore";
//import { articles } from "../mocks/articles"; - так как это не очень удобно, так хранить sданные, разношу отдельно комменты и статьи и делаю для них отдельные сторы.
//Для горизонтального взаимодействия между сторами нужно передать ссылку, каждому из них
import { normalizedArticles, normalizedComments } from "../mocks/articles";
import SimpleStore from "./SimpleStore";

const stores = {};

Object.assign(stores, {
    articles: new ArticleStore(stores, normalizedArticles),
    comments: new CommentStore(stores, normalizedComments)
});

window.stores = stores; //для удобства дебага


export default stores;
export const commentStore = stores.comments;
export const articleStore = stores.articles;

//console.log(articleStore.getAll());