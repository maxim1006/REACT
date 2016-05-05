//Сделал этот класс, чтобы добавить relations между article и комментами

class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item);
        this.__store = store;
    }

    //ex.: article.getRelation('comments')
    getRelation(relation) {
        const relStore = this.__store.getStore(relation);

        console.log(this, relStore);

        if (!relStore || !this[relation]) return [];

        return this[relation].map(relStore.getById)
    }
}

export default DataWrapper;