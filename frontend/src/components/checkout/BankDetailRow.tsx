import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface BankDetailRowProps {
  label: string;
  value: string;
  copyable?: boolean;
}

export function BankDetailRow({ label, value, copyable }: BankDetailRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-medium">{value}</span>
        {copyable && (
          <button
            onClick={handleCopy}
            type="button"
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Copiar ${label}`}
          >
            {copied ? (
              <Check
                size={14}
                className="scale-110 text-foreground transition-all duration-150"
              />
            ) : (
              <Copy
                size={14}
                className="text-muted-foreground hover:text-foreground transition-colors"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
