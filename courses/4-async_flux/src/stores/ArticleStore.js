//Стор должен уметь хранить и обрабатывать данные
//Менять стор может либо сам себя, либо его может менять ac, поэтому метдоы add, delete - приватные
import AppDispatcher from "../dispatcher";
import SimpleStore from "./SimpleStore";
import { DELETE_ARTICLE, ADD_COMMENT, DELETE_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL } from "../constants";

//AppDispatcher - поставляет экшены, на них надо подписаться, для этого есть метод register

export default class ArticleStore extends SimpleStore {
    constructor(stores, initialData) {

        super(stores,  initialData);

        this.loading = true;
        
        //подписка на экшены, теперь экшены попадут в стор
        AppDispatcher.register((action) => {
            const { type, data, argsObj } = action;
            const article = data ? this.getById(data.articleId) : {};

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id);
                    break;

                case ADD_COMMENT:
                    article.comments = (article.comments || []).concat(data.id);
                    break;

                case DELETE_COMMENT:
                    article.comments.splice(article.comments.indexOf(data.commentId), 1);
                    break;

                case LOAD_ALL_ARTICLES+START:
                    break;

                case LOAD_ALL_ARTICLES+SUCCESS:
                    data.forEach(this.__add);
                    this.loading = false;
                    break;

                case LOAD_ALL_ARTICLES+FAIL:
                    this.error = data;
                    this.loading = false;
                    break;

                case LOAD_ARTICLE_BY_ID+START:
                    this.getById(argsObj.id).loading = true;
                    break;

                case LOAD_ARTICLE_BY_ID+SUCCESS:
                    this.__add(data);
                    break;

                default: return;
            }


            this.emitChange();//при каждом изменении вызываю emitChange, чтобы оповестить вью, что что-то изменилось
        });
    }
}