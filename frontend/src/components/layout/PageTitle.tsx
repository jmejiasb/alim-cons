export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50 mr-auto mb-10">
      {title}
    </h1>
  );
}
