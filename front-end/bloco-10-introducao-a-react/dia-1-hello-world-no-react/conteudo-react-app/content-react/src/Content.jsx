import React from 'react';

class Content extends React.Component {
  render() {
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
    return (
      <div className='content'>
      {conteudos.map((contents) => (
        <div key={contents.conteudo} className='card'>
        <h4>{`O conteúdo é: ${contents.conteudo}`}</h4> 
        <p>{`status: ${contents.status}`}</p> 
        <p>{`bloco: ${contents.bloco}`}</p>
        </div>
      ))}
      </div>
    );
  }
}

export default Content;