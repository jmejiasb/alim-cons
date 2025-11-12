interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export function PageContainer({
  children,
  maxWidth = "md",
  className = "",
}: PageContainerProps) {
  const widthClasses = {
    xs: "max-w-md",
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className="flex h-full min-h-screen items-center justify-center md:h-[90vh]">
      <div
        className={`flex h-full w-screen ${widthClasses[maxWidth]} flex-col items-center py-8 px-16 md:h-[90vh] md:rounded-4xl bg-linear-to-t from-emerald-200 to-emerald-50 dark:bg-linear-to-t dark:from-slate-800 dark:to-black ease-out animate-in fade-in slide-in-from-bottom-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
