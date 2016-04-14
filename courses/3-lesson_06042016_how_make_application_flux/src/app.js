import React from 'react';
import { render } from 'react-dom';

import { articles } from "./mocks/articles";

import ArticleList from './components/ArticleList' ;

render(<ArticleList articles={articles} />, container);


 

