import { Check, Copy } from "lucide-react";
import { useState } from "react";

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
		<div className="grid grid-cols-1 gap-1 text-sm md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-center md:gap-3">
			<span className="text-muted-foreground">{label}</span>

			<div className="flex items-center justify-between gap-2 sm:contents">
				<span className="min-w-0 wrap-break-word font-medium leading-snug text-foreground sm:text-right">
					{value}
				</span>
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
