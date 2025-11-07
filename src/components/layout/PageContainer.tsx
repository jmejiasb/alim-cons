interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string
}

export function PageContainer({ 
  children, 
  maxWidth = 'md',
  className = '' 
}: PageContainerProps) {
  const widthClasses = {
    sm: 'max-w-xl',
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className="flex h-screen items-center justify-center md:h-[90vh]">
      <div className={`flex h-full w-full ${widthClasses[maxWidth]} flex-col items-center rounded-4xl py-8 px-16 md:h-[90vh] bg-linear-to-t from-emerald-200 to-emerald-50 dark:bg-linear-to-t dark:from-slate-800 dark:to-black ${className}`}>
        {children}
      </div>
    </div>
  );
}