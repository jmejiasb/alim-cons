"use client";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";

export function EbookDetailLoading() {
	const buttons = useDefaultNavButtons();

	return (
		<PageContainer maxWidth="lg">
			<NavigationLayout buttons={buttons} />
			<div className="mt-5 grid items-start gap-6 md:grid-cols-2">
				<div className="relative aspect-2/3 rounded-2xl border border-border bg-card md:max-h-180">
					<div className="h-full w-full animate-pulse rounded-2xl bg-muted" />
				</div>

				<div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
					<div className="my-5 h-8 w-3/4 animate-pulse rounded-md bg-muted" />

					<div className="space-y-3">
						<div className="h-4 w-full animate-pulse rounded-md bg-muted" />
						<div className="h-4 w-full animate-pulse rounded-md bg-muted" />
						<div className="h-4 w-5/6 animate-pulse rounded-md bg-muted" />
						<div className="h-4 w-4/6 animate-pulse rounded-md bg-muted" />
					</div>

					<div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
						<div className="space-y-2">
							<div className="h-4 w-20 animate-pulse rounded-md bg-muted" />
							<div className="h-8 w-28 animate-pulse rounded-md bg-muted" />
						</div>

						<div className="h-11 w-full animate-pulse rounded-xl bg-muted sm:w-48" />
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
