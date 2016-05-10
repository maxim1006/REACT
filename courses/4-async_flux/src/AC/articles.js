//тут храню action creator для articles, его вызываю в article.js, на изменения которые происходят с компонентом (в данном случае на удаление) (удаление в схеме - это action)

//Все действия с сервером делаю в AC
import AppDispatcher from "../dispatcher";
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID } from "../constants";
import { loadAll, loadById } from "./api/articles";
import { asyncAC } from "./utils";

export function deleteArticleAC(id) {
    //в диспатчер передаю объект с экшенами, у них должен быть type и передать данные
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE, //обязательный параметр
        data: { id }
    });
    //console.log("remove article ", id);
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES);

export const loadArticleById = asyncAC(loadById, LOAD_ARTICLE_BY_ID);