import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarRound() {
  return (
    <Avatar className="h-20 w-20">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Reinnys</AvatarFallback>
    </Avatar>
  )
}
