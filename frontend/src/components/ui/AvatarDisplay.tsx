import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AvatarDisplayProps = {
  src: string;
  fallback?: string;
  rounded?: boolean;
  fit?: "contain" | "cover";
  position?: string;
} & ComponentProps<typeof Avatar>;

export function AvatarDisplay({
  src,
  fallback,
  rounded = false,
  fit = "contain",
  className,
  position,
  ...props
}: AvatarDisplayProps) {
  return (
    <Avatar
      className={cn(
        "h-32 w-32 overflow-hidden",
        rounded && "rounded-full",
        className,
      )}
      {...props}
    >
      <AvatarImage
        src={src}
        className={cn(
          "h-full w-full",
          fit === "cover" ? "object-cover" : "object-contain",
          position,
        )}
      />
      <AvatarFallback className="bg-muted text-muted-foreground">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
