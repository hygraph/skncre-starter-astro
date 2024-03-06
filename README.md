# SKNCRE a Hygraph cosmetics brand demo

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).

## Setup

## Add GraphQL and Hygraph connections

In `.env` add and make sure to add content viewing permissions in Hygraph API settings

```
GQL_HOST=https://<HYGRAPH_CDN_LOCATION>.cdn.hygraph.com/content/<ID>/master
```

See `.env.example` for the setup requirements.

run `npm run codegen` for GraphQL types.

## Development Server

Start the development server on `http://localhost:4321`:

```bash
npm dev
```

Join [the Astro community](https://slack.hygraph.com) or jump read the [Hygraph docs](https://hygraph.com/docs).
