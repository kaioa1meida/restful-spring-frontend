# Restful Spring Frontend

Este é um projeto de frontend construído usando Node.js e React, projetado para interagir com uma API  de Livros em Spring Boot. Ele oferece uma interface amigável para consumir os endpoints da API e exibir os resultados em uma interface bem estruturada.

## Índice

- [Configuração do Projeto](#configuração-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Integração com a API](#integração-com-a-api)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Configuração do Projeto

Para começar com o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/kaioa1meida/restful-spring-frontend
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd restful-spring-frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   ```

A aplicação será executada em [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- **Node.js**: Backend para gerenciar dependências e executar o servidor de desenvolvimento.
- **React**: Biblioteca de frontend para construir interfaces de usuário interativas.
- **Axios**: Para fazer requisições HTTP para a API RESTful em Spring Boot.
- **CSS**: Para estilizar a aplicação.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Executa o app no modo de desenvolvimento.
- `npm run build`: Cria o app para produção.
- `npm test`: Executa o conjunto de testes.

## Integração com a API

Este frontend foi projetado para interagir com uma API RESTful em Spring Boot o backend dela está disponível em: https://github.com/kaioa1meida/restful-spring-kotlin. Você pode configurar a URL base da API no arquivo `src/services/api.js`.

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default api;
```

Certifique-se de que o backend em Spring Boot esteja rodando na porta correta (a padrão é `8080`) e fornecendo os endpoints necessários.

## Contribuindo

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto.
2. Crie sua branch de feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`).
4. Faça o push para a branch (`git push origin feature/minha-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.