const exibeMensagemVar = () => {
    var msgForaIF = 'Brasil';
  
    if (true) {
      var msgDentroIF = 'Argentina';  // 'var' ainda tem escopo de função
      console.log(msgDentroIF);  // "Argentina"
    }
  
    console.log(msgForaIF);  // "Brasil"
    console.log(msgDentroIF);  // "Argentina" (acessível fora do bloco 'if')
  };
  
  exibeMensagemVar();
  
  // As variáveis 'msgForaIF' e 'msgDentroIF' são locais para a função 'exibeMensagemVar',
  // portanto não são acessíveis aqui fora da função.
  console.log('1', typeof msgForaIF);  // "undefined"
  console.log('2', typeof msgDentroIF);  // "undefined"

  const exibeMensagemLet = () => {
    let msgForaIF = 'Brasil';  // Usando 'let' para escopo de bloco
  
    if (true) {
      let msgDentroIF = 'Argentina';  // 'let' tem escopo de bloco
      console.log(msgDentroIF);  // "Argentina"
    }
  
    console.log(msgForaIF);  // "Brasil"
    // A variável msgDentroIF não existe fora do bloco 'if', então dará erro se for acessada aqui
    // console.log(msgDentroIF);  // Erro! msgDentroIF não está definida fora do bloco 'if'
  };
  
  exibeMensagemLet();
  
  // As variáveis 'msgForaIF' e 'msgDentroIF' são locais para a função 'exibeMensagemLet',
  // e a variável msgDentroIF não está acessível fora do bloco 'if' ou da função.
  console.log('1', typeof msgForaIF);  // "undefined"
  console.log('2', typeof msgDentroIF);  // "undefined"
  