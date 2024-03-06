# SKNCRE a Hygraph cosmetics brand demo

- See the [running demo](https://skncre-cosmetics-hygraph-astro.vercel.app/).
- Join [the Hygraph community](https://slack.hygraph.com) for any questions or read the [Hygraph docs](https://hygraph.com/docs).

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

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).
