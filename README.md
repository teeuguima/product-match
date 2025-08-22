# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Contexto

Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Requisitos

- Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir a API fornecida pelo json-server para obter os dados dos produtos.
- Seguir as boas práticas de desenvolvimento e organização de código.
- Implementar testes unitários para as funcionalidades desenvolvidas.

## Como Executar

1. Clone o repositório: `git clone https://github.com/teeuguima/product-match.git`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Antes de iniciar a aplicação rode primeiro o backend: `yarn start:backend`
5. Agora inicie a aplicação com: `yarn start:frontend`

## Funcionalidades Adicionadas

1. O serviço de recomendação de produtos recebe as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço retorna as recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço retorna apenas um produto que corresponda melhor às preferências e funcionalidades definidas.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço retorna uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço retorna o último produto que atende aos critérios de seleção.
6. O serviço lida com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.

## Melhorias Adicionadas

1. Controle e validação do formulário.
2. A listagem exibe quais funcionalidades estão associadas ao produto.

## Considerações sobre o desafio
- Adicionei limpeza do formulário para tornar o processo melhor para o usuário caso ele queira tentar outra vez.
- Em questão de código, pensei em criar um contexto para o hook useRecommendation para atualizar a lista sem precisar utilizar callback após submit mas seria algo complexo para um uso pequeno.
- Os testes implementados foram relacionados a renderização da lista de produtos recomendados e a cobertura de um cenário quando não há produtos compatíveis.

## Autor

Desenvolvido por Mateus Guimarães dos Santos Lima

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
