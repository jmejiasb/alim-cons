import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "@/assets/logo.webp"

export function AvatarRound() {
  return (
    <Avatar className="h-32 w-32">
      <AvatarImage src={logo.src} alt="reinnys benitez" className="object-contain" />
      <AvatarFallback>Reinnys</AvatarFallback>
    </Avatar>
  )
}
