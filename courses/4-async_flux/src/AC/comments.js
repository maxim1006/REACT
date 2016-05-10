import { ADD_COMMENT, DELETE_COMMENT } from '../constants'
import AppDispatcher from '../dispatcher'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now() //классный идентификатор
        }
    });
}

export function deleteComment(articleId, commentId) {
    AppDispatcher.dispatch({
        type: DELETE_COMMENT,
        data: {
            articleId, commentId
        }
    });
}