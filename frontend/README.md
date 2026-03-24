# Frontend

Next.js frontend for the Alimentación Consciente ebook store.

## Responsibilities

- Display available ebooks
- Show ebook detail pages
- Handle checkout flow
- Submit contact form
- Connect to the backend GraphQL API

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- GraphQL client

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
```

For production, set it to your deployed backend GraphQL endpoint.

## Install and Run

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
```

## Notes

- The frontend depends on the backend GraphQL API being available.
- Make sure `NEXT_PUBLIC_GRAPHQL_URL` points to the correct backend URL.
- This app is intended to be deployed on Vercel.

## Deployment

Deploy the frontend to **Vercel** and configure the required environment variables in the project settings.