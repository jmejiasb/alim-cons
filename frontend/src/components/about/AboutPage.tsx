"use client";

import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import { AvatarDisplay } from "../ui/AvatarDisplay";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageTitle } from "../layout/PageTitle";
import about from "@/assets/about.webp"
import { getAboutText } from "./about-text";

export function AboutPage() {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />

      <PageTitle title="Sobre Mi" className="mb-2"/>

      <div className="flex flex-col items-center gap-2 text-center animate-in fade-in zoom-in-95 duration-500">
        <AvatarDisplay
          src={about.src}
          className="h-40 w-40"
        />

        <p className="max-w-prose whitespace-pre-line text-muted-foreground leading-relaxed">
          {getAboutText()}
        </p>
      </div>
    </PageContainer>
  );
}
