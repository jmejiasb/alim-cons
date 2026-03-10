export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50 mb-10 mx-auto text-center">
      {title}
    </h1>
  );
}
