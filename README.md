# Desafio Ultracar - Processo Seletivo Front

Este repositório contém a solução desenvolvida para um desafio proposto pela Ultracar, uma empresa que desenvolve software para oficinas mecânicas. O objetivo do desafio foi montar um fluxo e apresentar a solução desenvolvida usando a construção de telas.

## Fluxo da Aplicação:

1 - Quando o cliente chega na oficina, ele apresenta seu QRCode ou ID para o profissional técnico.

2 - O profissional técnico escaneia o código QRCode do cliente usando um dispositivo móvel, que identifica o cliente no sistema.

3 - As informações do cliente, como nome e veículo, são exibidas em um modal na tela.

4 - O mecânico responsável insere seu nome e seleciona o veículo do cliente na lista de veículos cadastrados. Se o veículo não estiver na lista, há uma opção para informar outro veículo, com um campo de texto para preencher com as informações do veículo. O mecânico seleciona as peças ou componentes que precisam ser consertados ou trocados e adiciona uma descrição do serviço necessário. Em seguida, ele clica em "Cadastrar serviço".

5 - Um modal de confirmação é exibido. O mecânico pode revisar e confirmar as informações ou cancelar o cadastro.

6 - Depois que o serviço é cadastrado, um novo modal é exibido, com as opções de escanear outro QRCode para cadastrar outro serviço ou ir para a lista de serviços.

7 - Na tela de serviços, é exibida uma tabela com as informações de todos os serviços cadastrados, incluindo o nome do mecânico responsável (com opção de pesquisa), nome do cliente, veículo, descrição do serviço, data de início/termino e ações para ver mais detalhes ou excluir o serviço.

8 - O mecânico pode iniciar o serviço clicando em "Iniciar" na tabela de "Data de início", que registra a data e hora atual do início do serviço. Quando o serviço é concluído, o botão "Finalizar" é habilitado, permitindo que o mecânico registre a data e hora de término do serviço.

## Tecnologias utilizadas

A aplicação foi desenvolvida utilizando React com typescript e com a blibioteca Ant Desing e css para a estilização, visando atender ao objetivo proposto pelo desafio.

## Pontos fortes e pontos fracos

- A aplicação apresenta um fluxo intuitivo e de fácil compreensão para o usuário.
- As informações do cliente e do serviço são exibidas de maneira clara e organizada, permitindo ao mecânico acessá-las rapidamente.
- A utilização da biblioteca Ant Design proporcionou um layout limpo e moderno para a aplicação.
- A aplicação foi desenvolvida utilizando uma arquitetura de Micro Serviços, o que garante a segurança dos dados.
- A utilização do React com TypeScript proporcionou um desenvolvimento mais ágil e confiável.

- Embora a aplicação apresente diversas funcionalidades bem implementadas e uma boa experiência do usuário, ainda há oportunidades de melhoria na usabilidade e legibilidade da aplicação. Infelizmente, devido a limitações de tempo, não foi possível implementar alguns recursos desejados, como a construção de uma base de dados. Esses recursos podem ser explorados em um momento futuro para aumentar a eficiência e funcionalidade da aplicação.

## Como testar a aplicação

Para testar a aplicação, basta clonar este repositório e seguir as instruções para instalar as dependências e iniciar a aplicação. A aplicação pode ser executada em um servidor local ou acessar pelo link [https://ultracar-challenger.vercel.app/](https://ultracar-challenger.vercel.app/).

### `npm start`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

## Próximos passos

Os próximos passos para o desenvolvimento da aplicação incluem a construção de uma base de dados e a implementação de recursos para melhorar a usabilidade e legibilidade. Além disso, outras tecnologias podem ser adicionadas à aplicação para aumentar a eficiência e funcionalidade.
