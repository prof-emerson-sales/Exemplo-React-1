import { useState } from "react";                             // componente de estado do React, para criar variáveis de estado e atualizar a interface do usuário quando essas variáveis mudarem

export default function App() {                               // export para tornar o componente App disponível para outros arquivos importarem. default para indicar que este é o componente principal do arquivo
  const [mensagem, setMensagem] = useState("");               // declaração de uma variável de estado chamada "mensagem" e uma função "setMensagem" para atualizar essa variável. O valor inicial é uma string vazia ("").
  const [mostraMensagem, setMostraMensagem] = useState("");   // mostraMensagem é outra variável de estado que armazenará a mensagem que será exibida na tela. O valor inicial também é uma string vazia ("").

  return (                                                    // App retorna um JSX que representa a interface do usuário. O JSX é uma sintaxe que permite escrever HTML dentro do JavaScript, facilitando a criação de componentes React.
    <div>
      <input
        type="text"
        value={mensagem}
        onChange={(event) => setMensagem(event.target.value)} 
        placeholder="Escreva uma mensagem"
      />

      <button onClick={() => setMostraMensagem(mensagem)}>
        Enviar
      </button>

      <h1>{mostraMensagem}</h1>
    </div>
  );
}

/* 
input: 
    - type indica o tipo (texto)
    - value é o valor atual do input, que está vinculado à variável de estado "mensagem".
    - onChange é um evento que é acionado sempre que o valor do input muda. Ele recebe uma função que atualiza a variável de estado "mensagem" com o novo valor do input (event.target.value).

button:
    - onClick é um evento que é acionado quando o botão é clicado. Ele recebe uma função que atualiza a variável de estado "mostraMensagem" com o valor atual da variável "mensagem". Isso faz com que a mensagem digitada no input seja exibida na tela.
    - As funções quando chamadas no modelo "() => funcao()" são denominadas de "função de seta (arrow functions)".

h1:
    - {mostraMensagem} é uma expressão JSX que exibe o valor da variável de estado "mostraMensagem". Quando o botão é clicado, essa variável é atualizada com a mensagem digitada, e o conteúdo do h1 é atualizado para mostrar essa mensagem.
*/