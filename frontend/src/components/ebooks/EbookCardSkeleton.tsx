import { Card, CardContent } from "@/components/ui/card";

export function EbookCardSkeleton() {
	return (
		<Card
			className="h-80 w-50 overflow-hidden rounded-2xl border border-border 
			bg-card sm:h-104"
		>
			<CardContent className="flex h-full flex-col gap-3 p-4">
				<div className="relative aspect-3/4 overflow-hidden rounded-xl bg-muted animate-pulse" />

				<div className="mt-3 space-y-2">
					<div className="h-4 w-full rounded-md bg-muted animate-pulse" />
					<div className="h-4 w-3/4 rounded-md bg-muted animate-pulse" />
				</div>

				<div className="mt-auto flex items-center justify-between pt-2">
					<div className="space-y-2">
						<div className="h-4 w-16 rounded-md bg-muted animate-pulse" />
						<div className="h-5 w-20 rounded-md bg-muted animate-pulse" />
					</div>

					<div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
				</div>
			</CardContent>
		</Card>
	);
}
