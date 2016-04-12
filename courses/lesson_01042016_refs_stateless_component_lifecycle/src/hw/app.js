import React from 'react';
import { render } from 'react-dom';

import CommentList from "./components/CommentList";





render(<CommentList comments={[
    "Простой компонент - комментарий",
    "Простой компонент - комментарий1",
    "Простой компонент - комментарий2",
    "Простой компонент - комментарий3",
    "Простой компонент - комментарий4",
]} />, container);


