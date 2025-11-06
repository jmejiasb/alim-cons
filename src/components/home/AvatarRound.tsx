import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarRound() {
  return (
    <Avatar className="h-1/6 w-1/6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Reinnys</AvatarFallback>
    </Avatar>
  )
}
