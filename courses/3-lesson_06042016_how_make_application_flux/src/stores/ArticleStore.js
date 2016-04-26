//Стор должен уметь хранить и обрабатывать данные
//Менять стор может либо сам себя, либо его может менять ac, поэтому метдоы add, delete - приватные
import AppDispatcher from "../dispatcher";
import SimpleStore from "./SimpleStore";
import { DELETE_ARTICLE } from "../constants";

//AppDispatcher - поставляет экшены, на них надо подписаться, для этого есть метод register

export default class ArticleStore extends SimpleStore {
    constructor(stores, initialData) {

        super(stores, initialData);
        
        //подписка на экшены, теперь экшены попадут в стор
        AppDispatcher.register((action) => {
            const { type, data } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id);
                    this.emitChange();//при каждом изменении вызываю emitChange, чтобы оповестить вью, что что-то изменилось
                    break;
            }

            console.log("this.getAll() ", this.getAll());
        });
    }
}