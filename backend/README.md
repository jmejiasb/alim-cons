# Backend

NestJS backend for the Alimentación Consciente ebook store.

## Responsibilities

- Manage ebooks
- Manage purchases
- Manage contact messages
- Send transactional emails
- Generate signed ebook download links
- Expose a GraphQL API for the frontend

## Tech Stack

- NestJS
- GraphQL
- TypeORM
- PostgreSQL
- Nodemailer
- Supabase Storage

## Environment Variables

Create a `.env` file:

```env
PORT=4000

SUPABASE_URL=
SUPABASE_SECRET_KEY=
SUPABASE_EBOOK_BUCKET=
SUPABASE_SIGNED_URL_DURATION=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
ADMIN_EMAIL=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
INTERNAL_API_KEY=
```

## Install and Run

```bash
npm install
npm run start:dev
```

The API should be available at:

```bash
http://localhost:4000/graphql
```

## Useful Scripts

```bash
npm run start
npm run start:dev
npm run build
npm run test
npm run test:e2e
npm run test:cov
```

## Main Modules / Services

- **Ebooks**: manages ebook data
- **Purchases**: creates purchases and purchase items
- **Contacts**: stores and processes contact messages
- **EmailService**: sends admin and customer emails
- **StorageService**: generates signed Supabase download URLs

## Purchase Flow

1. Receive purchase input
2. Resolve ebook data
3. Create purchase items with `priceAtPurchase`
4. Save the purchase
5. Send purchase emails
6. When completed, generate signed download links

## Notes

- `SUPABASE_SECRET_KEY` must stay server-side only.
- `SUPABASE_SIGNED_URL_DURATION` is expressed in seconds.
- The backend is intended to be deployed on Railway.
- The database and storage are handled through Supabase.

## Deployment

Deploy the backend to **Railway** and configure all required environment variables there.