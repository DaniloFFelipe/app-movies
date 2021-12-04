# Projeto Movies

## Requisitos

- Node.js >= v14
- Yarn (não usar o npm)
- Expo-cli

## Estrutura de pastas

- src/

  - components/

    - NomeDoComponent/
      - index.tsx
      - styles.tsx

  - screens/

    - NomeDoComponent/
      - index.tsx
      - styles.tsx

  - hooks/

    - useNomeDoHooks.ts

  - routes/

    - nomeDaRota.routes.tsx
    - index.tsx (exporta as rotas com NavigationContainer)

  - services/

    - api.ts (base da api)
    - nomeDoService.ts

  - utils/
    - nomeDoUtil.ts

## Como rodar o projeto

1. clonar o repositorio.
2. roda yarn, na pasta do projeto, para instalar as dependencias.
3. expo/yarn start, para rodar.

## Estrutura do commit

Padrão: https://github.com/conventional-changelog/conventional-changelog

Exp.: type(scope): message
