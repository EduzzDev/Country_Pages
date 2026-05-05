# 🌍 Country Pages

> Aplicação React + Vite para explorar países com busca, filtros e detalhes completos.

[![Vite](https://img.shields.io/badge/Vite-FF005C?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Por que este projeto?

Uma interface leve e moderna para consultar dados de países a partir da [REST Countries API](https://restcountries.com/).
A proposta é ensinar e demonstrar um front-end responsivo com React, filtros dinâmicos e navegação clara.

---

## 🚀 Funcionalidades principais

- 🔎 Busca rápida por nome de país
- 🌍 Filtros por região (África, Américas, Ásia, Europa, Oceania)
- ✅ Filtro de países membros da ONU
- 🟢 Filtro de países independentes
- 📊 Página de detalhes com informações completas
- 📱 Layout responsivo para desktop e dispositivos móveis
- ⚡ Build rápido com Vite

---

## 🧰 Tecnologias usadas

| Front-end | Estilização  | Componentes           | Outros             |
| --------- | ------------ | --------------------- | ------------------ |
| React 19  | Tailwind CSS | MUI (`@mui/material`) | React Router Dom   |
| Vite      | Lucide React | ESLint                | REST Countries API |

---

## 🚧 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn disponível

---

## ▶️ Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 📁 Estrutura do projeto

- `public/` — arquivos estáticos
- `src/` — código-fonte
  - `assets/` — imagens e recursos
  - `components/` — componentes reutilizáveis
    - `Hover.jsx`
    - `InputCheck.jsx`
  - `pages/` — páginas da aplicação
    - `CountryDetails.jsx`
  - `App.jsx` — componente principal
  - `main.jsx` — ponto de entrada
  - `index.css` / `App.css` — estilos globais
- `package.json` — dependências e scripts
- `tailwind.config.js` — configuração Tailwind
- `vite.config.js` — configuração Vite
- `eslint.config.js` — regras de lint

---

## 📝 Uso do aplicativo

1. Digite o nome de um país na barra de pesquisa
2. Selecione as regiões desejadas
3. Ative os filtros de ONU e independência
4. Clique em um país para ver os detalhes completos

---

## 💡 Dicas rápidas

- Use parte do nome para pesquisar mais rápido
- Combine filtros para encontrar exatamente o que precisa
- Explore o modo desktop para ver todos os dados do país

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para enviar melhorias, correções ou novas ideias.

1. Faça fork do repositório
2. Crie uma branch nova
3. Abra um pull request

---

## 📄 Licença

Projeto aberto e gratuito para uso.

---

## 👨‍💻 Autor

Desenvolvido por Eduardo
