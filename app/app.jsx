import React from 'react';
import {render} from 'react-dom';
import Main from './Main/Main';

const ele = document.createElement('div');
document.body.appendChild(ele);
render(<Main/>, ele)
