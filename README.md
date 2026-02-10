# 🌍 Country Pages

Uma aplicação web moderna para explorar informações detalhadas sobre países do mundo. Busque, filtre e descubra dados sobre cada país, incluindo população, idiomas, moedas e muito mais!

## ✨ Características

- 🔍 **Busca por Nome**: Procure países pelo nome de forma rápida e intuitiva
- 🗺️ **Filtro por Região**: Explore países por continente (África, Américas, Ásia, Europa, Oceania)
- 🏛️ **Filtro ONU**: Veja apenas países membros das Nações Unidas
- 🏴 **Filtro Independência**: Filtre por países independentes
- 📱 **Design Responsivo**: Interface bonita e funcional em qualquer dispositivo
- 🎨 **Temas Visuais**: Ícones elegantes e design modern com Tailwind CSS
- ⚡ **Performance**: Construído com Vite para carregamento ultra-rápido

## 🛠️ Tecnologias

- **React 19**: Biblioteca JavaScript para interfaces de usuário
- **Vite**: Build tool ultrarrápido
- **React Router**: Navegação entre páginas
- **Tailwind CSS**: Estilização utilitária
- **Material-UI**: Componentes prontos
- **Lucide React**: Ícones de alta qualidade
- **REST Countries API**: Dados de países

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

## 🚀 Instalação e Uso

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/country_pages.git
cd country_pages/country_page
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173` (ou outro porto disponível)

## 📦 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento com HMR
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Verificar linting
npm run lint
```

## 📁 Estrutura do Projeto

```
country_page/
├── src/
│   ├── components/
│   │   ├── Hover.jsx          # Componente de interação ao passar mouse
│   │   └── InputCheck.jsx      # Componente de checkbox para filtros
│   ├── pages/
│   │   └── CountryDetails.jsx  # Página de detalhes do país
│   ├── assets/                 # Imagens e assets
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos globais
├── public/                      # Arquivos estáticos
├── package.json                 # Dependências
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
└── eslint.config.js            # Configuração ESLint
```

## 🌐 Como Usar a Aplicação

1. **Buscar por Nome**: Digite o nome de um país na barra de pesquisa
2. **Filtrar por Região**: Use os checkboxes para selecionar regiões específicas
3. **Filtros Adicionais**: Marque as opções de "ONU" ou "Independente" para refinar a busca
4. **Ver Detalhes**: Clique em um país para ver informações completas

## 🔌 API

Essa aplicação utiliza a [REST Countries API](https://restcountries.com/) que fornece dados sobre:

- Nomes em múltiplos idiomas
- Capital
- Região e subregião
- População
- Área
- Moedas
- Idiomas
- Bandeira
- E muito mais!

## 💡 Exemplos de Busca

Você pode buscar:

- Por nome do país: "Brasil", "Japan", "France"
- Por região: "africa", "asia", "europe"
- Combinar filtros para resultados mais específicos

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ por Eduardo

## 📞 Suporte

Se tiver dúvidas ou encontrar problemas, abra uma [issue](https://github.com/seu-usuario/country_pages/issues)
