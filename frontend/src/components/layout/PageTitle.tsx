export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="mx-auto mb-10 max-w-xs text-center text-xl font-semibold tracking-tight text-primary">
      {title}
    </h1>
  );
}
