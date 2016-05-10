//фабрика для удобства работы
import AppDispatcher from "../dispatcher";
import { FAIL, START, SUCCESS } from "../constants";

export function asyncAC(apiCall, type) {

    return (argsObj) => {
        
        AppDispatcher.dispatch({
            type: type + START,
            argsObj
        });

        setTimeout(() => {
            apiCall(argsObj)
                .done(data => AppDispatcher.dispatch({
                    type: type + SUCCESS,
                    data,
                    argsObj
                }))
                .fail(error => AppDispatcher.dispatch({
                    type: type + FAIL,
                    data: error,
                    argsObj
                }))
        }, 1000);


    };

}