import { cn } from "@/lib/utils";
import { formatCLP } from "@/utils/formatClp";
import { formatUsd } from "@/utils/formatUsd";

interface PriceProps {
	regularPrice: number;
	salesPrice?: number | null;
	usdRate?: number | null;
	className?: string;
}

export function Price({
	regularPrice,
	salesPrice,
	usdRate,
	className,
}: PriceProps) {
	const hasSale = (salesPrice ?? 0) > 0;
	const price = hasSale ? (salesPrice ?? 0) : regularPrice;

	const formatted = formatCLP(price);
	const formattedRegular = formatCLP(regularPrice);
	const formattedUsd = usdRate ? formatUsd(price / usdRate) : null;

	return (
		<div className={cn("flex flex-col gap-1", className)}>
			<div className="flex items-baseline gap-2">
				<span className="text-lg font-semibold text-primary">{formatted}</span>
				{hasSale && (
					<span className="text-sm line-through text-muted-foreground">
						{formattedRegular}
					</span>
				)}
			</div>

			{formattedUsd && (
				<span className="text-sm text-muted-foreground">US{formattedUsd}</span>
			)}
		</div>
	);
}
