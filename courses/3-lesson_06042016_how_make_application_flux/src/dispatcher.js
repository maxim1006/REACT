//это диспетчер, синглтон, один на все приложение
import { Dispatcher } from "flux";

const AppDispatcher = new Dispatcher;

//для дебага, на любой экшен выводится в консоли что произошло
AppDispatcher.register(console.log.bind(console));

export default AppDispatcher;
