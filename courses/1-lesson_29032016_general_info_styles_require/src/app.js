import React from 'react'; //тут надо импортить реакт, так как везде где используется jsx, он преобразуется в React.{...}
import { render } from 'react-dom' //нужно для разнесения логики виртуального дома и рендеринга, поэтому логику работы с виртуальным деревом содержат в реакте, а логику рендеринга положили в react-dom

import ArticleList from './ArticleList'
import { articles } from './fixtures'
import some from './some' //так могу просто импортить файлы, даже которые ничего не возвращают, на выходе в этом случае будет объект

import Hello from './Hello'; //импорчу компонент
import CustomComponent from './CustomComponent';

render(<Hello prop="custom attr" />, document.getElementById('container')); //рендерю компонент и вставляю в дом

//render(<ArticleList articles = {articles} />, document.getElementById('container'));  //тут был сделан компонент ArticleList, и ему в дату (через атрибут) засовываем articles - дату. А внутри  ArticleList эта дата будет доступна как this.props.articles. В this.props - доступны все данные из атрибутов

//render(<CustomComponent paragraphs = {['paragraph1', 'paragraph2', 'paragraph3']} />, document.getElementById('container1'));

//console.log(some, 'some'); //{}