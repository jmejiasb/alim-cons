"use client";

import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { AvatarRound } from "../layout/AvatarRound";
import { NavButton } from "./NavButton";
import { PageTitle } from "../layout/PageTitle";
import logo from "@/assets/logo.webp"

export default function HomePage() {

  const buttons = useDefaultNavButtons().map(b => {
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
          <AvatarRound 
            src={logo.src}
          />
          <PageTitle title="Reinnys Benitez"/>
        </div>
        <div className="flex flex-col items-center align-top w-full gap-5">
          <NavButton href="/ebooks" label="EBOOKS" />
          <NavButton href="/contact" label="Asesoría Personalizada" inverted={true} />
          <NavButton href="/about" label="Sobre mi" />
        </div>
      </div>
    </PageContainer>
  );
}
