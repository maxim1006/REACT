//тут собираю все сторы и инициализирую

import ArticleStore from "./ArticleStore";
import { articles } from "../mocks/articles"

export const articleStore = new ArticleStore(articles);