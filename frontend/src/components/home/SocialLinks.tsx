import Link from "next/link";
import { Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { IconButton } from "../ui/IconButton";

export function SocialLinks() {
  return (
    <div className="flex gap-3 mt-2">
      <Link href="https://instagram.com/reibtz_" target="_blank">
        <IconButton icon={<SiInstagram size={18} />} ariaLabel="Instagram" className="text-primary hover:text-primary/80"/>
      </Link>

      <Link href="mailto:adminreinnys13@gmail.com">
        <IconButton icon={<Mail size={18} />} ariaLabel="Email" className="text-primary hover:text-primary/80"/>
      </Link>
    </div>
  );
}
