import React from 'react';
import './App.css';
import '../todo/Todo';
import '../template/Custom.css'
import Routes from './routes';
import Menu from '../template/menu';

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
