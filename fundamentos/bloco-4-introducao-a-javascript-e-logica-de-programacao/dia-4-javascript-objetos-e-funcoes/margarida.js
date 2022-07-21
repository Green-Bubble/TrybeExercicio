let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    info2: {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
    },
  };

  //console.log('Bem-vinda ' + info.personagem);
  //console.log(info);

  /*for(let key in info) {
    console.log(key);
  }*/

  /*for(let value in info) {
      console.log(info[value]);
  }*/

  console.log(info.personagem + ' e ' + info.info2.personagem);
  console.log(info.origem + ' e ' + info.info2.origem);
  console.log(info.nota + ' e ' + info.info2.nota);

  if(info.recorrente == 'não') {
      console.log(inválido);
  } else if (info.info2.recorrente == 'não'){
      console.log(inválido);
  } else {
      console.log('Ambos recorrentes');
  }
  