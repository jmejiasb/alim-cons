import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { EbooksTab } from "./EbooksTab";
import { PurchasesTab } from "./PurchasesTab";
import { ContactTab } from "./ContactTab";

export function AdminTabs() {
  return (
    <Tabs defaultValue="ebooks" className="flex w-11/12 justify-center">
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
  );
}
