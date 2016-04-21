//тут объединяю все что могу переиспользовать во всех сторах

import { EventEmitter }from "events";

export default class ArticleStore extends EventEmitter {
    constructor(initialData) {

        super();

        this.__items = {}; //тут храню данные

        if (initialData) {
            initialData.forEach(this.__add);
        }
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