"use client";

import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import Image from "next/image";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageTitle } from "../layout/PageTitle";

export function AboutPage() {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <PageTitle title="Sobre Mi" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="relative hidden md:block aspect-2/3 w-full row-span-2 h-125">
          <Image
            fill
            src={"https://picsum.photos/id/41/1280/805"}
            alt={"Reinnys Benitez"}
            className="rounded-lg object-cover"
          />
        </div>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus luctus erat vel interdum. Suspendisse id elit vitae urna
          aliquet interdum eget sit amet ex. Fusce gravida ut ex vulputate
          suscipit. Duis mattis quam augue, id rutrum sem ornare vitae. Fusce
          molestie eleifend feugiat. Suspendisse a ullamcorper massa, in lacinia
          est. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Mauris condimentum orci ac felis
          finibus cursus. Phasellus ac porttitor ex.{" "}
        </h2>
      </div>
    </PageContainer>
  );
}
