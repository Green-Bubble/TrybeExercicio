import React from 'react';
import './App.css';

const Task = (value) => {
  return (
   <li key={value}>{value}</li>
  );
}

const list = ['Alongamento', 'Exercício de Respiração', 'Atividade Física', 'Estudar', 'Aula de Inglês']

class App extends React.Component {
  render() {
    return (
      <ul>{ list.map(tasks => Task(tasks)) }</ul>
    );
  }
}

export default App;
