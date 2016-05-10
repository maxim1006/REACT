//тут объединяю все что могу переиспользовать во всех сторах

import { EventEmitter }from "events";
import DataWrapper from "./DataWrapper";

export default class SimpleStore extends EventEmitter {
    constructor(stores, initialData) {

        super();

        this.__stores = stores;
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

    getStores() {
        return this.__stores;
    }

    getStore(name) {
        return this.__stores[name];
    }

    getById = (id) => {
        return this.__items[id]
    };

    getAll = () => {
        return Object.keys(this.__items).map(this.getById)
    };

    __add = (item) => {
        //this.__items[item.id] = item;
        this.__items[item.id] = new DataWrapper(item, this);//сохраняю не только сами данные, но и инфу про стор в котором эти данные лежат
    };

    __delete = (id) => {
        delete this.__items[id];
    };
}