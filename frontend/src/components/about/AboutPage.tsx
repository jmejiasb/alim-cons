"use client";

import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import { AvatarRound } from "../layout/AvatarRound";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageTitle } from "../layout/PageTitle";
import about from "@/assets/about.webp"

export function AboutPage() {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />

      <PageTitle title="Sobre Mi" />

      <div className="flex flex-col items-center gap-8 text-center animate-in fade-in zoom-in-95 duration-500">
        <AvatarRound
          src={about.src}
          className="h-60 w-60"
        />

        <p className="max-w-prose text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus luctus erat vel interdum. Suspendisse id elit vitae urna
          aliquet interdum eget sit amet ex. Fusce gravida ut ex vulputate
          suscipit.
        </p>
      </div>
    </PageContainer>
  );
}
