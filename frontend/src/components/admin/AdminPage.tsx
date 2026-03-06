"use client";

import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { NavigationLayout } from "../layout/NavigationLayout";
import { AdminTabs } from "./AdminTabs";

export function AdminPage() {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="full">
      <NavigationLayout buttons={buttons} />
      <div className="w-11/12">
        <PageTitle title="Panel Admin" />
      </div>
      <AdminTabs />
    </PageContainer>
  );
}
