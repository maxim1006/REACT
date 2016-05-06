//тут храню action creator для articles, его вызываю в article.js, на изменения которые происходят с компонентом (в данном случае на удаление) (удаление в схеме - это action)
import AppDispatcher from "../dispatcher";
import { DELETE_ARTICLE } from "../constants";

export function deleteArticleAC(id) {
    //в диспатчер передаю объект с экшенами, у них должен быть type и передать данные
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE, //обязательный параметр
        data: { id }
    });
    //console.log("remove article ", id);
}