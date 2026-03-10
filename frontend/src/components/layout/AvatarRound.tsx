import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentProps } from "react";

type AvatarRoundProps = {
  src: string;
  fallback?: string;
} & ComponentProps<typeof Avatar>;

export function AvatarRound({ src, fallback, className, ...props}: AvatarRoundProps) {
  return (
    <Avatar className={className ?? "h-32 w-32"} {...props}>
      <AvatarImage src={src} className="object-contain" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
