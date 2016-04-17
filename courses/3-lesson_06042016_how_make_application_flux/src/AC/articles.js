//тут храню action для articles
import AppDispatcher from "../dispatcher";
import { DELETE_ARTICLE } from "../constants";

export function deleteArticleAC(id) {
    //в диспатчер передаю объект с экшенами, у них должен быть type и передать данные
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    });
    console.log("remove article ", id);
}