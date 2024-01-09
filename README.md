# Desafio técnico - Star Wars Planets

## Descrição
Star Wars Planets Explorer é uma aplicação web interativa que oferece aos usuários a experiência de explorar planetas do universo Star Wars. Utilizando dados em tempo real da API SWAPI, o aplicativo combina tecnologias modernas com uma paixão pela saga Star Wars.

## Tecnologias Utilizadas
- React 18.2.0: Para construir interfaces de usuário interativas e eficientes.
- Vite 5.0.8: Ferramenta de build para desenvolvimento rápido e performance otimizada na produção.
- Axios 1.6.2: Para realizar requisições HTTP assíncronas.
- GSAP 3.12.4: Para animações sofisticadas.
- React Router DOM 6.21.1: Para uma navegação eficiente entre páginas.

## Instalação e Execução
Para iniciar a aplicação localmente, clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/star-wars-planets.git
cd star-wars-planets
npm install
npm run dev

star-wars-planets
├─ .eslintrc.json
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ img
│  │     ├─ png
│  │     │  ├─ background.png
│  │     │  ├─ glowing-spaceship-orbits.png
│  │     │  ├─ logo-footer.png
│  │     │  ├─ logo-title-home.png
│  │     │  ├─ nave-spaceship.png
│  │     │  ├─ planet-starwars.png
│  │     │  ├─ planetOrange.png
│  │     │  └─ spaceship5.png
│  │     └─ svg
│  │        ├─ react.svg
│  │        └─ starwars-logo.svg
│  ├─ components
│  │  ├─ Footer
│  │  │  ├─ footer.css
│  │  │  └─ index.jsx
│  │  ├─ Header
│  │  │  ├─ header.css
│  │  │  └─ index.jsx
│  │  ├─ ProtectedRoute
│  │  │  └─ ProtectedRoute.jsx
│  │  └─ SplashScreen
│  │     ├─ index.jsx
│  │     └─ splash.css
│  ├─ context
│  │  └─ SearchContext.jsx
│  ├─ layouts
│  │  └─ DefaultLayout
│  │     ├─ defaultLayout.css
│  │     └─ index.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ HomePage
│  │  │  ├─ Home.css
│  │  │  └─ index.jsx
│  │  └─ PlanetPage
│  │     ├─ index.jsx
│  │     └─ Planet.css
│  ├─ routes
│  │  └─ Router.jsx
│  ├─ services
│  │  ├─ axiosConfig.js
│  │  └─ swapiService.js
│  └─ styles
│     └─ global.css
└─ vite.config.js
