import AppDispatcher from "../dispatcher";
import { EventEmitter } from "events";

export default class ArticleStore extends EventEmitter {
    constructor(stores, initialData) {

        super();

        AppDispatcher.register((action) => {
            const {type, data} = action;

            switch(type) {
                case "DELETE_ARTICLE":
                    this.__delete(data.index);
                    this.emitChange();
                    break;

                case "ADD_ARTICLE":
                    this.__addNewArticle(data);
                    this.emitChange();
                    break;
            }
        });

        this.__stores = stores;
        this.items = [];

        if (initialData) {
            initialData.forEach(this.__add);
        }

    }

    __delete = (index) => {
        this.items.splice(index, 1);
    };

    __add = (elem) => {
        this.items.push(elem);
    };

    __addNewArticle = (elem) => {
        this.items.unshift(elem);
    };

    getAll() {
        return this.items;
    }

    emitChange() {
        this.emit("CHANGE_EVENT");
    }

    addChangeListener(cb) {
        this.on('CHANGE_EVENT', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE_EVENT', cb);
    }
}

