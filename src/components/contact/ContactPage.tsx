import { useRouter } from "next/navigation";
import { createDefaultNavigationButtons } from "../layout/createDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

interface ContactPageProps {
  onSubmit: () => Promise<void>;
}

export function ContactPage({ onSubmit }: ContactPageProps) {
  const router = useRouter();

  const buttons = createDefaultNavigationButtons({
    onBack: () => router.back(),
    onCart: () => {},
  });

  return (
    <PageContainer maxWidth="lg">
      <NavigationLayout buttons={buttons} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ContactForm onSubmit={onSubmit} />

        <div className="relative aspect-2/3 w-full">
          <Image
            fill
            src={"https://picsum.photos/id/41/1280/805"}
            alt={"Reinnys Benitez"}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </PageContainer>
  );
}
