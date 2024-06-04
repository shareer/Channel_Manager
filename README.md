# Channel Manager

This project is a demonstration showcasing the reusable component for managing different channels. It follows the Atomic design pattern and is developed with Vue 3 in Vite and Tailwind.

## Development server

After cloning the project in the local machine run `npm install` to install the dependencies and followed by `npm run dev` to run server locally. Navigate to `http://localhost:5173/`. Project is also deployed in vercel at
https://channel-manager-beige.vercel.app/

## Framework/Libraries Used

- Vue 3
- Javascript
- Tailwind for styling
- Vitest with Jest for unit testing
- Pinia for state management
- Cypress for e2e Testing

## Node.js and npm Versions

This project was developed using Node.js and npm. Below are the versions used:

- Node.js: v20.13.1
- npm: 10.5.2

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
