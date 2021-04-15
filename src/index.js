//CRISTIAN MEDINA 1824150
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Calculadora} from './components/calculadora';

const divRoot = document.querySelector('#root');

ReactDOM.render( <Calculadora num1={0}  num2={0} name="Cristian Medina"/>, divRoot);