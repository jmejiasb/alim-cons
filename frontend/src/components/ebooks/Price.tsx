import { cn } from "@/lib/utils";
import { formatCLP } from "@/utils/formatClp";

interface PriceProps {
  regularPrice: number;
  salesPrice?: number;
  className?: string;
}

export function Price({
  regularPrice,
  salesPrice,
  className,
}: PriceProps) {
  const hasSale = (salesPrice ?? 0) > 0;
  const price = hasSale ? salesPrice! : regularPrice;

  const formatted = formatCLP(price);
  const formattedRegular = formatCLP(regularPrice);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-lg font-semibold text-primary">
        {formatted}
      </span>

      {hasSale && (
        <span className="text-sm line-through text-muted-foreground">
          {formattedRegular}
        </span>
      )}
    </div>
  );
}