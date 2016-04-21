import React from 'react';
import { render } from 'react-dom';
import ArticleListContainer from './containers/ArticleListContainer' ;
//import { articleStore } from './stores/' //тут автоматом нахожу index.js - это уже не нужно, так как ArticleListContainer будет общаться со стором


//тут могу делать что угодно если поменялся стор, не важно на какое изменение, биндю это в ArticleStore, где вызываю этот коллбек
//articleStore.addChangeListener(() => console.log("articleList changed")); //тут фиксирую изменения в сторе.
//render(<ArticleList articles={articleStore.getAll()} />, container);

//замечу, что тут уже рендерю не ArticleList, а обертку над ним, которая умеет перерендерировать вью при изменении в сторе.
render(<ArticleListContainer />, document.getElementById("container"));


 

