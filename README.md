## Desafio

Precisamos desenvolver uma ferramenta para criação de Cards de conteúdo esportivos (Insights).


### Como RODAR

- Passo 1 Crie um .env no escopo principal do projeto

- Passo 2 Copie tudo do .env.example nela mas mude as variáveis REACT_APP_CURRENT_IP = para seu ip (entre no CMD e digite ipconfig) , mude também a váriavel POSTGRES_HOST para o seu ip dois pontos e a porta onde o container está hospedada(no caso foi definida como 5431)

- Passo 3 Para rodar é necessário o docker e o docker-compose , execute esse comando "docker-compose up -d --build" que vai gerar nossa imagem e nossos containers também.

- Espero que gostem desse desenvolvimento :D



### Porque desse jeito?
 - Desde o começo, tive a ideia de fazer um relacionamento entre as tabelas criando linha em outra tabela relacionada aos cards, só que a perfomance não se saiu bem, então optei em fazer o básico, como vocês queriam bastante performance foi o suficiente

 
### 1. Interace HTTP REST API

Ações da API

- Criar card
- Ler card
- Remover card
- Atualizar card
- Listar card
  - Filtrar por tags

Um card possui os campos: 
```
{
  "id": // identificador
  "texto" // texto do card
  "data_criacao" // data da criação do card
  "data_modificacao" // data da última alteração do card
  "tags" // tags vinculas ao card
}
```

- Criar Tag
- Ler Tag
- Remover Tag
- Atualizar Tag

```
Uma tag possui os campos:
{
  "id" // identificador
  "name" // nome da tag
}
```

Temos uma estimativa de milhares de criações de cards diariamente. A preocupação com performance será avaliada.

### 2. CLI para importação dos card

Necessitamos importar os conteúdos do nosso sistema de dados esportivos para gerar nossos cards e precisamos de uma ferramenta para auxiliar essa tarefa.


Dado um csv de "cards", faça um CLI (Command Line Interface) que importe os dados para o Insights.

CSV exemplo:

```
text,tag
Lorem ipsum dolor sit amet., tag1;tag2;tag3
Mauris fringilla non quam vel lacinia,tag3
Cras in tempus libero,
```
### 3. Interface WEB

Após termos nossa api desenvolvida, precisamos viabilizar uma interface frontend para nossos usuários interagirem.

Nosso time de UX desenhou as [telas](https://www.sketch.com/s/3f91077d-21c0-4040-8fae-b89d69809d9b) e disponibilizou para você!

Dê preferência aos frameworks como o Vuetify para aproveitar os componentes já prontos.

Clique no box com o botão de play para entrar no modo de navegação com os hotspots que indicam o fluxo.

Clique em cada uma das telas e utilize a funcionalidade de "Inspector" para ter acesso ao guia de css.

Os ícones utilizados no projeto são do [Material Design](https://material.io/resources/icons/?style=baseline)

Utilize o botão "Download Assets" para baixar a marca do produto Insights.


### Requerimentos:
- Linguagens de programação backend:
  - Python
  - NodeJs
  - C#
- Framework frontend
  - VueJS
  - ReactJS
  - Angular
- Fidelidade de layout
- Code Style
- Teste unitário
- Documentação
  - Descrição
  - Como rodar
  - API DOC (openapi/swagger)
