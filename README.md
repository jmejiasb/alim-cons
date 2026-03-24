# Alimentacion Consciente Website

Website for selling ebooks, built with a modern full-stack setup using **Next.js**, **NestJS**, and **GraphQL**. The project is split into a frontend deployed on **Vercel** and a backend deployed on **Railway**, using **Supabase** for both the database and file storage. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

## Tech Stack

### Frontend

- Next.js
- TypeScript
- GraphQL client
- Tailwind CSS
- shadcn/ui

### Backend

- NestJS
- GraphQL
- TypeORM
- PostgreSQL
- Nodemailer

### Infrastructure

- Frontend: Vercel
- Backend: Google Cloud Run (Docker)
- Database: Supabase
- File storage: Supabase Storage :contentReference[oaicite:2]{index=2}

---

## Features

- Browse available ebooks
- View ebook details
- Create purchases through GraphQL
- Store purchase items with the price snapshot at purchase time
- Contact form submission
- Email notifications for:
  - new purchase to admin
  - purchase confirmation to customer
  - contact messages to admin
  - ebook download links after purchase completion
- Signed download URLs generated from Supabase Storage :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

---

## Project Structure

```bash
frontend/
backend/
```

## Documentation

- [Frontend setup](./frontend/README.md)
- [Backend setup](./backend/README.md)


## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run start:dev
```

## Deployment

- Frontend: Vercel
- Backend: Railway
- Database: Supabase
- Storage: Supabase Storage
