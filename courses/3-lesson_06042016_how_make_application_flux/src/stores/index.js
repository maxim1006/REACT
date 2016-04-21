//тут собираю все сторы и инициализирую

import ArticleStore from "./ArticleStore";
//import { articles } from "../mocks/articles"; - так как это не очень удобно, так хранить данные, разношу отдельно комменты и статьи и делаю для них отдельные сторы
import { normalizedArticles, normalizedComments } from "../mocks/articles";
import SimpleStore from "./SimpleStore";


const stores = {
    articles: new ArticleStore(normalizedArticles),
    comments: new SimpleStore(normalizedComments)
};

window.stores = stores; //для удобства дебага

export default stores;
export const commentStore = stores.comments;
export const articleStore = stores.articles;