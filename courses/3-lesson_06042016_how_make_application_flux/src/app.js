import React from 'react';
import { render } from 'react-dom';
import ArticleListContainer from './components/ArticleListContainer' ;
import { articleStore } from './stores/' //тут автоматом нахожу index.js



//articleStore.addChangeListener(() => console.log("articleList changed")); //тут фиксирую изменения в сторе.
//render(<ArticleList articles={articleStore.getAll()} />, container);

render(<ArticleListContainer />, container);


 

