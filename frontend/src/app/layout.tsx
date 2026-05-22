import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/CartContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { getOptionalUsdRate } from "@/repositories/currencyRepository";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Reinnys Benitez",
	description: "Reinnys Benitez",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const usdRate = await getOptionalUsdRate();

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Toaster />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
				>
					<CurrencyProvider usdRate={usdRate}>
						<CartProvider>
							<main className="flex min-h-screen w-full bg-background font-sans md:items-center md:justify-center">
								{children}
								<CartDrawer />
							</main>
						</CartProvider>
					</CurrencyProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
