import { PageContainer } from "../layout/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ContactTab } from "./ContactTab";
import { EbooksTab } from "./EbooksTab";
import { PurchasesTab } from "./PurchasesTab";

export function AdminPage() {
  return (
    <PageContainer maxWidth="full">
      <header className="mb-6 space-y-1">
        <h1 className="text-xl font-semibold">Panel Admin</h1>
      </header>

      <Tabs defaultValue="ebooks" className="">
        <TabsList variant="line">
          <TabsTrigger value="ebooks">Ebooks</TabsTrigger>
          <TabsTrigger value="purchase">Compras</TabsTrigger>
          <TabsTrigger value="contact">Contactos</TabsTrigger>
        </TabsList>
        <TabsContent value="ebooks">
          <EbooksTab />
        </TabsContent>
        <TabsContent value="purchase">
          <PurchasesTab />
        </TabsContent>
        <TabsContent value="contact">
          <ContactTab />
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
