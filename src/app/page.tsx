import { NavButton } from "@/components/home/NavButton";
import { AvatarRound } from "@/components/home/AvatarRound";
import { ThemeToggle } from "@/components/ThemeToggle";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center md:h-[90vh]">
      <div className="flex h-full w-full max-w-3xl flex-col items-center rounded-4xl py-8 px-16 bg-linear-to-t from-emerald-100 to-emerald-50 dark:bg-linear-to-t dark:from-slate-800 dark:to-black">
        <div className="flex flex-col items-start ml-auto mb-25">
          <ThemeToggle />
        </div>

        <div className="flex flex-col items-center w-full gap-2 mb-8">
          <AvatarRound />
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50">
            MongoDB
          </h1>
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <NavButton href="/" label="EBOOKS" />
          <NavButton href="/" label="Asesoría Personalizada" inverted={true} />
          <NavButton href="/" label="Catálogo" />
        </div>
      </div>
    </div>
  );
}
