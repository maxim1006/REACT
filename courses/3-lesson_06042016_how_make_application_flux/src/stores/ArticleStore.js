//Стор должен уметь хранить и обрабатывать данные
//Менять стор может либо сам себя, либо его может менять ac, поэтому метдоы add, delete - приватные
import AppDispatcher from "../dispatcher";
import { EventEmitter }from "events";

//AppDispatcher - поставляет экшены, на них надо подписаться, для этого есть метод register

export default class ArticleStore extends EventEmitter {
    constructor(initialData) {

        super();

        this.__items = {}; //тут храню данные

        if (initialData) {
            initialData.forEach(this.__add);
        }

        AppDispatcher.register((action) => {
            const { type, data } = action;

            switch (type) {
                case 'deleteArticle':
                    this.__delete(data.id);
                    this.emitChange();//при каждом изменении вызываю emitChange, чтобы оповестить вью, что что-то изменилось
                    break;
            }

            console.log("this.getAll() ", this.getAll());
        });
    }

    emitChange() {
        this.emit("CHANGE_EVENT");
    }

    addChangeListener(cb) {
        this.on('CHANGE_EVENT', cb);
    }

    getById = (id) => {
        return this.__items[id]
    };

    getAll = () => {
        return Object.keys(this.__items).map(this.getById)
    };

    __add = (item) => {
        this.__items[item.id] = item;
    };

    __delete = (id) => {
        delete this.__items[id];
    };
}