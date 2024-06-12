# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Carambar Simplon
Techs Utilisées

Nuxt, TailwindCSS Html

Dbeaver (MAMP)

Installation
Utiliser npm install dans le terminal pour installer les dépendences 
Documentation et installation des Frameworks
[Documentation Nuxt] https://nuxt.com/docs/getting-started/installation

[Documentation Tailwind] https://tailwindcss.com/docs/installation

BDD
Utiliser le code (copier/coller) qui se trouve dans le fichier db.sql dans Dbeaver Par exemple pour creer votre base de données Apologies

CREATE DATABASE carambar;

USE carambar;

CREATE TABLE jokes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  joke TEXT NOT NULL,
  reponse TEXT
);

INSERT INTO jokes (joke, reponse) VALUES 
  ('Quelle est la femelle du hamster ?', 'L’Amsterdam'),
  ('Que dit un oignon quand il se cogne ?', 'Aïe'),
  ('Quel est l''animal le plus heureux ?', 'Le hibou, parce que sa femme est chouette.'),
  ('Pourquoi le football c''est rigolo ?', 'Parce que Thierry en rit'),
  ('Quel est le sport le plus fruité ?', 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.'),
  ('Que se fait un Schtroumpf quand il tombe ?', 'Un Bleu'),
  ('Quel est le comble pour un marin ?', 'Avoir le nez qui coule'),
  ('Qu''est ce que les enfants usent le plus à l''école ?', 'Le professeur'),
  ('Quel est le sport le plus silencieux ?', 'Le para-chuuuut'),
  ('Quel est le comble pour un joueur de bowling ?', 'C’est de perdre la boule');

