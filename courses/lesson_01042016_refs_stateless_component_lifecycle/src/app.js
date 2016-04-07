import React from 'react';
import { render } from 'react-dom';

import CommentList from "./CommentList";
import JqueryComponent from "./jQueryComponent";
import HighComponent from "./HighComponent";
import WrappedClass from "./WrappedClass";
import OuterComponent from "./OuterComponent";



//пример подключения простого/глупого компонента
render(<CommentList comments={[
"Простой компонент - комментарий",
"Простой компонент - комментарий1"
]} />, container);



render(<JqueryComponent />, container1);



//пример обернутого компонента
render(<WrappedClass />, container3);



//пример влияния чайлда на родителя
render(<OuterComponent />, container4);



