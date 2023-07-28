# Seller catalog web app

## Getting started

Install the dependencies:

```shell
yarn
```

Create an ".env" file:

```properties
VITE_API_URL=http://localhost:3001
```

Develop your component in isolation through [Storybook stories](https://storybook.js.org/docs/react/writing-stories/introduction) then run storybook:

```shell
yarn storybook
```

Integrate the component then run the dev server:

```shell
yarn dev
```

Make your change, test it:

```shell
yarn test
```

commit using:

```shell
yarn commit
```

Push, deploy and enjoy!

## API

We tend to use '/api' to run all auor HTTP requests (with Ky)

## Design system

[Figma](https://www.figma.com/)

We want to use the [Atomic Design](https://blog-ux.com/quest-ce-que-latomic-design/) approach, but the [Page](./src/ds/pages/Page/Page.jsx) component won't follow this approach
