import AppDispatcher from "../dispatcher";
import SimpleStore from "./SimpleStore";
import { ADD_COMMENT, DELETE_COMMENT } from "../constants";

export default class CommentStore extends SimpleStore {

    constructor(...args) {

        super(...args);

        AppDispatcher.register((action) => {

            const {type, data} = action;

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    });
                    break;

                case DELETE_COMMENT:
                    this.__delete(data.commentId);
                    break;
            }

        });

    }

}
