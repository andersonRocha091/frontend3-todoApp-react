import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };
    //necessario para garantir que sempre o this está
    // referenciando ao componente pai, permitindo assim
    // chamar o metodo dessa classe em qualquer lugar
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {

  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}
