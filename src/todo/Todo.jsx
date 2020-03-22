import React from 'react';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


// import { Container } from './styles';

export default props => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
)



