"use client";

import { useState } from "react";
import { EbookTable } from "./EbooksTable";

export function EbooksTab() {
	const [ebooks, setEbooks] = useState([]);

	console.log(setEbooks);
	return <EbookTable ebooks={ebooks} />;
}
