"use client";

import { createDefaultNavigationButtons } from "../layout/createDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { AvatarRound } from "./AvatarRound";
import { NavButton } from "./NavButton";

export default function HomePage() {
  const buttons = createDefaultNavigationButtons({
    onBack: () => {},
    onCart: () => {},
  }).map(b => {
    if (b.id != "back") return b

    return {...b, disabled: true}
  });

  return (
    <PageContainer maxWidth="xs">
      <NavigationLayout buttons={buttons} />
      <div className="flex flex-col py-8 md:py-0 md:justify-center">
        {/* <div className="flex flex-col items-start ml-auto mb-25">
          <ThemeToggle />
        </div> */}

        <div className="flex flex-col items-center w-full gap-2 mb-8">
          <AvatarRound />
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50">
            MongoDB
          </h1>
        </div>
        <div className="flex flex-col items-center align-top w-full gap-5">
          <NavButton href="/ebooks" label="EBOOKS" />
          <NavButton href="/" label="Asesoría Personalizada" inverted={true} />
          <NavButton href="/" label="Catálogo" />
        </div>
      </div>
    </PageContainer>
  );
}
