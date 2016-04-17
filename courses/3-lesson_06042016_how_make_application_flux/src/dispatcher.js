//это диспетчер, синглтон, один на все приложение
import { Dispatcher } from "flux";

const AppDispatcher = new Dispatcher;

export default AppDispatcher;
