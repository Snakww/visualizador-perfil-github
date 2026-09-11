# Visualizador de Perfil do GitHub

Um projeto simples em JavaScript puro para buscar e exibir informações públicas de um usuário do GitHub, incluindo avatar, bio, seguidores, seguindo e os últimos repositórios públicos.

## ✨ Funcionalidades

- Busca por nome de usuário do GitHub
- Exibição do perfil com avatar, nome, bio e estatísticas
- Listagem de repositórios públicos do usuário
- Indicador de carregamento enquanto a busca é realizada
- Tratamento de erros, como usuário não encontrado
- Interface responsiva para diferentes tamanhos de tela

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- API pública do GitHub

## 📁 Estrutura do projeto

```text
visualizador-perfil-github/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── animations.css
    │   ├── reset.css
    │   ├── responsive.css
    │   └── styles.css
    └── css/js/
        ├── github-api.js
        ├── index.js
        └── profile-view.js
```

## ▶️ Como executar

Como o projeto é estático, você pode abrir o arquivo `index.html` diretamente no navegador.

### Opção 1: abrir diretamente

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Digite o nome de usuário do GitHub.
3. Clique em "Buscar".

### Opção 2: usar um servidor local

Se preferir, pode rodar um servidor local para evitar possíveis limitações de carregamento de arquivos:

```bash
cd visualizador-perfil-github
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```

## 🔎 Como funciona

O projeto faz duas chamadas principais à API pública do GitHub:

1. Busca os dados do perfil do usuário
2. Busca os repositórios públicos do usuário

Essas informações são processadas e renderizadas dinamicamente na página.

## ⚠️ Informações importantes

- O projeto acessa dados públicos da API do GitHub.
- O uso da API pode estar sujeito a limites de taxa (rate limits), especialmente em ambientes com muitas requisições.
- Usuários privados ou com acesso restrito não serão exibidos corretamente.
- Para funcionar normalmente, o navegador precisa ter acesso à internet.

## 🧩 Arquivos principais

- `index.html`: estrutura principal da aplicação
- `src/css/js/index.js`: controla a busca do usuário e a interação com a interface
- `src/css/js/github-api.js`: faz as requisições para a API do GitHub
- `src/css/js/profile-view.js`: renderiza os dados do perfil e dos repositórios na página

## 📌 Observações

Este projeto é ideal para fins didáticos e pode servir como base para versões mais avançadas, como:

- filtro de repositórios
- busca por linguagem
- paginação
- carregamento de dados em modal ou tabs
- integração com outros serviços do GitHub

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e demonstração.
