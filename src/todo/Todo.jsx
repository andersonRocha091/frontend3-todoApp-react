import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
// import { Container } from './styles';

export default class Todo extends Component {
  render() {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        </div>
    );
  }
}
