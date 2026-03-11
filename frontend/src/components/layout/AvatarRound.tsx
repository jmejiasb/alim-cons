import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AvatarRoundProps = {
  src: string;
  fallback?: string;
} & ComponentProps<typeof Avatar>;

export function AvatarRound({ src, fallback, className, ...props}: AvatarRoundProps) {
  return (
    <Avatar className={cn("h-32 w-32", className)} {...props}>
      <AvatarImage src={src} className="object-contain" />
      <AvatarFallback className="bg-muted text-muted-foreground">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
