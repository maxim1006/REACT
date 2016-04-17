//тут храню action для articles
import AppDispatcher from "../dispatcher";

export function deleteArticleAC(id) {
    //в диспатчер передаю объект с экшенами, у них должен быть type и передать данные
    AppDispatcher.dispatch({
        type: 'deleteArticle',
        data: { id }
    });
    console.log("remove article ", id);
}