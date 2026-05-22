import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButtonPrimary({ value }: { value: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			onClick={handleCopy}
			type="button"
			className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
			aria-label={`Copiar datos transferencia`}
		>
			{copied ? (
				<Check
					size={14}
					className="scale-110 text-primary-muted transition-all duration-150"
				/>
			) : (
				<Copy
					size={14}
					className="text-primary hover:text-primary-foreground transition-colors"
				/>
			)}
		</button>
	);
}
