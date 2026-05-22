"use client";

import type { IconType } from "react-icons";
import { CopyButtonPrimary } from "../ui/CopyPrimary";
import { BankDetailRow } from "./BankDetailRow";

type Detail = {
	label: string;
	value: string;
	copyable?: boolean;
};

type BankDetailsCardProps = {
	title: string;
	icon: IconType;
	details: Detail[];
};

export function BankDetailsCard({
	title,
	icon: Icon,
	details,
}: BankDetailsCardProps) {
	const copyText = details.map((detail) => `${detail.value}`).join("\n");

	return (
		<div className="space-y-3 rounded-lg border bg-card p-6 text-left">
			<div className="flex items-center justify-center gap-2">
				<Icon className="text-lg text-primary" />

				<h1 className="text-primary">{title}</h1>

				<CopyButtonPrimary value={copyText} />
			</div>

			{details.map((detail) => (
				<BankDetailRow
					key={detail.label}
					label={detail.label}
					value={detail.value}
					copyable={detail.copyable ?? true}
				/>
			))}
		</div>
	);
}
