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
    <div className="flex h-full items-center justify-between sm:min-h-[90vh] sm:py-8 md:min-h-[90vh] md:py-8">
      <div
        className={`flex h-full w-screen ${widthClasses[maxWidth]} flex-col items-center py-8 px-16 sm:min-h-[90vh] sm:rounded-4xl md:min-h-[90vh] md:rounded-4xl bg-linear-to-t from-emerald-200 to-emerald-50 dark:bg-linear-to-t dark:from-slate-800 dark:to-black ease-out animate-in fade-in slide-in-from-bottom-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
