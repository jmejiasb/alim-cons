# Alimentacion Consciente Website

Website for selling ebooks, built with a modern full-stack setup using **Next.js**, **NestJS**, and **GraphQL**. The project is split into a frontend deployed on **Vercel** and a backend deployed on **Railway**, using **Supabase** for both the database and file storage.

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
- File storage: Supabase Storage

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
- Signed download URLs generated from Supabase Storage

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
