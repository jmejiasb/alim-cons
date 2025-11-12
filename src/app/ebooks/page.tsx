import { PageContainer } from "@/components/layout/PageContainer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { type EbookCardProps , EbookCard } from "@/components/ebooks/EbookCard";

const sampleEbooks: EbookCardProps[] = [
  {
    title: "Mastering TypeScript",
    imgUrl: "https://picsum.photos/seed/typescript/245/350",
    regularPrice: 29.99,
    salesPrice: 19.99,
  },
  {
    title: "React Recipes",
    imgUrl: "https://picsum.photos/seed/react/245/350",
    regularPrice: 24.99,
  },
  {
    title: "Node.js in Action",
    imgUrl: "https://picsum.photos/seed/nodejs/245/350",
    regularPrice: 34.99,
    salesPrice: 24.99,
  },
  {
    title: "CSS Grid & Flexbox",
    imgUrl: "https://picsum.photos/seed/css/245/350",
    regularPrice: 19.99,
    salesPrice: 14.99,
  },
  {
    title: "Full-Stack Next.js",
    imgUrl: "https://picsum.photos/seed/nextjs/245/350",
    regularPrice: 39.99,
  },
];

export default function Ebooks() {
  return (
    <PageContainer maxWidth="xl">
      <div className="flex flex-col items-start ml-auto mb-10">
        <ThemeToggle />
      </div>
      <div>
        
      </div>
      <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50 mr-auto mb-10">
        Mis Ebooks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {sampleEbooks?.map((ebook) => (
          <EbookCard
            key={ebook.title}
            title={ebook.title}
            imgUrl={ebook.imgUrl}
            regularPrice={ebook.regularPrice}
            salesPrice={ebook.salesPrice ?? 0}
          /> 
        ))}
      </div>
    </PageContainer>
  )
}