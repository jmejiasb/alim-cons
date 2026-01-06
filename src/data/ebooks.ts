import type { Ebook } from "@/types/ebook";

export const DEFAULT_EBOOKS: readonly Ebook[] = [
  {
    id:"masteringtypescript",
    title: "Mastering TypeScript",
    url: "https://picsum.photos/seed/typescript/245/350",
    imgUrl: "https://picsum.photos/seed/typescript/245/350",
    regularPrice: 29.99,
    salesPrice: 19.99,
  },
  {
    id:"reactrecipes",
    title: "React Recipes",
    url: "https://picsum.photos/seed/typescript/245/350",
    imgUrl: "https://picsum.photos/seed/react/245/350",
    regularPrice: 24.99,
  },
  {
    id:"nodejsinaction",
    title: "Node.js in Action",
    url: "https://picsum.photos/seed/typescript/245/350",
    imgUrl: "https://picsum.photos/seed/nodejs/245/350",
    regularPrice: 34.99,
    salesPrice: 24.99,
  },
  {
    id:"cssgrid&flexbox",
    title: "CSS Grid & Flexbox",
    url: "https://picsum.photos/seed/typescript/245/350",
    imgUrl: "https://picsum.photos/seed/css/245/350",
    regularPrice: 19.99,
    salesPrice: 14.99,
  },
  {
    id:"fullstacknextjs",
    title: "Full-Stack Next.js",
    url: "https://picsum.photos/seed/typescript/245/350",
    imgUrl: "https://picsum.photos/seed/nextjs/245/350",
    regularPrice: 39.99,
  },
];