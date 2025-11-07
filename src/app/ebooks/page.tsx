import { PageContainer } from "@/components/layout/PageContainer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const Card = () => {
  return (
    <div
      className="flex items-center justify-center w-50 h-70 bg-amber-100 rounded-xl"
    >
      CLUSTER
    </div>
  )
}

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
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}></Card>
        ))}
      </div>
    </PageContainer>
  )
}