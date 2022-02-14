<h1>Desafio Desenvolvedor Front-end</h1>

Projeto realizado como parte de processo seletivo.
<hr>

<h2>Tecnologias/Ferramentas utilizadas</h2>

- Node JS
- Axios
- API (banco de dados JSON - fornecido)
- Bibliotecas
    - React JS
    - Material UI
    - ApexCharts
- Facilitadores de escrita de código
    - HTML CSS Support
    - Prettier - Code formatter
    - Simple React Snippets

<h2>Funcionalidades implementadas</h2>

- SPA em React JS
- Busca/filtro de elementos no banco de dados
- Controle de estados (useState)
- Máscara de valores nos inputs
- Exibição dos dados de retorno da API
- Montagem e exibição de gráfico responsivo com retorno da API
- Implementação de responsividade

<h2>Como acessar e executar o Projeto</h2>

- Clonar o repositório usando o comando:<br>
<code>git clone https://github.com/EtorLucca/Desafio-Desenvolvedor-Frontend.git</code>

- Instalar as dependências do projeto:
    - Abra um terminal do VS Code na pasta API e digite o comando:<br>
      <code>
       npm install
      </code><br>
    ou<br>
      <code>
       yarn add<br>
      </code><br>
    - Abra um terminal do VS Code na pasta web e digite o comando:<br>
      <code>
       npm install
      </code><br>
    ou<br>
      <code>
       yarn add<br>
      </code><br>
     
- Digite (no terminal da pasta API) o comando para iniciar o servidor em <code>http://localhost:5000</code><br>
    <code>
    npx json-server --watch db.json --port 5000
    </code><br>

- Após a inicialização do servidor digite (no terminal da pasta web) o comando:<br>
    <code>
    npm start
    </code><br>
  ou<br>
    <code>
    yarn start<br>
    </code><br>
  Por padrão a aplicação será inicializada em <code>http://localhost:3000</code>
  
<h2>Comentários adcionais</h2>

- A implementação da máscara nos inputs já limita a inserção a caracteres numéricos apenas, não fazendo necessária a validação dos campos.
- Caso necessário, a implementação da validação se dá através de controle de estados e validação com regex, com possibilidade de remoção dos caracteres não numéricos.
