# 🌍 Country Pages

> Aplicação web interativa em React + Vite para explorar dados de países do mundo.
> Busca em tempo real, filtros avançados e páginas de detalhes com informações geográficas completas.

[![Vite](https://img.shields.io/badge/Vite-FF005C?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Material UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

---

## ✨ Sobre o projeto

Uma interface moderna e responsiva para consultar dados de países em tempo real usando a [REST Countries API v3.1](https://restcountries.com/).
Ideal para aprender React, state management, integração de APIs e design responsivo com Tailwind CSS.

---

## 🚀 Funcionalidades principais

### 🔍 Busca e Filtros
- **Busca por nome** — busque por nome completo ou parcial do país
- **Filtro por região** — filtre por continente (África, Américas, Antártida, Ásia, Europa, Oceania)
- **Filtro por ONU** — mostra apenas países membros das Nações Unidas
- **Filtro por independência** — mostra apenas países independentes
- **Combinação de filtros** — combine múltiplos filtros para refinar resultados

### 📊 Página de Detalhes
Cada país exibe informações como:
- Nome oficial e nomes alternativos
- Bandeira com imagem em alta resolução
- População e área (em km²)
- Capital e subregião
- Idiomas falados
- Moedas usadas
- Países vizinhos (borders) com bandeiras
- Continentes

### 🎨 Interface & UX
- Layout responsivo (mobile, tablet, desktop)
- Imagens otimizadas com srcSet para diferentes resoluções
- Skeleton loading para melhor percepção de performance
- Ícones via Lucide React
- Paleta de cores dark moderna

---

## 🧰 Tecnologias & Stack

| Categoria | Tecnologia | Versão |
| --- | --- | --- |
| **Framework** | React | 19.2.0 |
| **Build Tool** | Vite | 7.2.4 |
| **Roteamento** | React Router DOM | 7.12.0 |
| **Estilização** | Tailwind CSS | 4.1.18 |
| **Componentes** | Material UI | 7.3.6 |
| **Ícones** | Lucide React | 0.562.0 |
| **Styling avançado** | Emotion | 11.14.0 |
| **Linting** | ESLint | 9.39.1 |
| **API** | REST Countries v3.1 | Live |

---

## 🚧 Pré-requisitos

- **Node.js** 16 ou superior
- **npm** (v6+) ou **yarn** (v1+)
- Um navegador moderno (Chrome, Firefox, Safari, Edge)

---

## ▶️ Instalação e execução

### 1️⃣ Instalação das dependências
```bash
npm install
```

### 2️⃣ Iniciar servidor de desenvolvimento
```bash
npm run dev
```
A aplicação abrirá automaticamente em `http://localhost:5173`

### 3️⃣ Build para produção
```bash
npm run build
npm run preview
```

### 4️⃣ Verificar código (Lint)
```bash
npm run lint
```

---

## 📁 Estrutura detalhada do projeto

```
Country_Pages/
│
├── 📄 package.json                 # Dependências, scripts e metadados
├── 📄 vite.config.js               # Configuração do Vite + plugins
├── 📄 tailwind.config.js           # Configuração do Tailwind CSS
├── 📄 eslint.config.js             # Regras de linting
├── 📄 README.md                    # Este arquivo
│
├── 📁 public/                      # Arquivos estáticos (não processados)
│
└── 📁 src/                         # Código-fonte da aplicação
    ├── 📄 main.jsx                 # Ponto de entrada do React
    ├── 📄 App.jsx                  # Componente raiz com lógica principal
    ├── 📄 index.css                # Estilos globais
    ├── 📄 App.css                  # Estilos adicionais do App
    │
    ├── 📁 assets/                  # Imagens e recursos estáticos
    │   ├── hero-image.jpg          # Imagem hero (desktop)
    │   ├── hero-image-sm.jpg       # Imagem hero (mobile)
    │   └── Logo.svg                # Logo da aplicação
    │
    ├── 📁 components/              # Componentes reutilizáveis
    │   ├── Hover.jsx               # Componente com efeito hover
    │   └── InputCheck.jsx          # Componente de checkbox para filtros
    │
    └── 📁 pages/                   # Páginas da aplicação
        └── CountryDetails.jsx      # Página de detalhes do país
```

---

## 🔧 Componentes principais

### `App.jsx`
Componente raiz que:
- Gerencia estado de países e filtros
- Realiza busca na API REST Countries
- Filtra por região, ONU e independência
- Limita resultados a 13 países por busca
- Passa dados via URL params para a página de detalhes

### `CountryDetails.jsx`
Página de detalhes que:
- Captura parâmetros de URL via `useSearchParams()`
- Exibe bandeira, nome oficial e informações geográficas
- Mostra idiomas e moedas em formato legível
- Lista países vizinhos com bandeiras
- Adapta layout para diferentes tamanhos de tela

### `Hover.jsx` & `InputCheck.jsx`
Componentes auxiliares para:
- Efeitos visuais ao interagir com itens
- Gerenciar checkboxes de filtro

---

## 🌐 Integração com API

### REST Countries API v3.1
A aplicação faz requisições para:

**Busca por nome:**
```
GET https://restcountries.com/v3.1/name/{name}
```

**Filtro por região:**
```
GET https://restcountries.com/v3.1/region/{region}
```

**Regiões suportadas:** africa, americas, antarctic, asia, europe, oceania

Dados retornados incluem:
- `name` (comum e oficial)
- `flags` (URL da bandeira)
- `population`
- `area`
- `capital`
- `region` / `subregion`
- `languages`
- `currencies`
- `continents`
- `borders` (código ISO de países vizinhos)

---

## 📝 Como usar a aplicação

### Busca básica
1. Digite o nome do país (ex: "Brazil", "Jap", "Fra")
2. Resultado aparece em tempo real com até 13 países

### Filtrar por região
1. Clique em um dos 6 continentes disponíveis
2. A lista atualiza automaticamente
3. Combine com busca por nome para refinar mais

### Ver detalhes
1. Clique em qualquer país da lista
2. Acesse a página com informações completas
3. Veja bandeira, população, idiomas, moedas e vizinhos

### Dicas avançadas
- Combine filtros de região + ONU + independência
- Use nomes parciais para resultados mais amplos
- Os países vizinhos são links interativos na página de detalhes

---

## 🎨 Design e responsividade

### Breakpoints
- **Mobile:** até 480px (imagens otimizadas com srcSet)
- **Tablet:** 480px — 1024px
- **Desktop:** 1024px+

### Esquema de cores
- Fundo escuro (#1B1D1F)
- Texto claro (#D2D5DA)
- Bordas sutis (#282B30)
- Ícones coloridos via Lucide React

---

## 🚀 Performance

- **Vite HMR** — recarregamento instantâneo em desenvolvimento
- **Code splitting** — carregamento otimizado
- **Image optimization** — srcSet para diferentes resoluções
- **Skeleton loading** — feedback visual durante carregamento
- **API caching** — reutiliza dados já buscados

---

## 🔗 Recursos úteis

- [REST Countries API Docs](https://restcountries.com/)
- [React Documentation](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch com sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é aberto e pode ser usado, modificado e distribuído livremente.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por **Eduardo**

---

## 💬 Suporte & Feedback

Encontrou um bug? Tem sugestões? Crie uma issue no repositório!


---
