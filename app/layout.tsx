import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "DIGIGO - E-SOFT Electro Hydro Enhancer | Hard Water Treatment Solutions",
        template: "%s | DIGIGO E-SOFT",
    },
    description: "DIGIGO's E-SOFT (Electro Hydro Enhancer) provides advanced hard water treatment solutions for government, hospitals, industrial, agriculture, and residential sectors. Eco-friendly, chemical-free water conditioning technology.",
    keywords: [
        "hard water treatment",
        "water softener",
        "E-SOFT",
        "electro hydro enhancer",
        "DIGIGO",
        "industrial water treatment",
        "hospital water solutions",
        "agriculture water treatment",
        "chemical-free water conditioning",
        "eco-friendly water treatment",
    ],
    authors: [{ name: "DIGIGO" }],
    creator: "DIGIGO",
    publisher: "DIGIGO",
    metadataBase: new URL("https://digigo.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://digigo.com",
        siteName: "DIGIGO E-SOFT",
        title: "DIGIGO - E-SOFT Electro Hydro Enhancer | Hard Water Treatment Solutions",
        description: "Advanced hard water treatment solutions for government, hospitals, industrial, agriculture, and residential sectors.",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "DIGIGO E-SOFT Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "DIGIGO - E-SOFT Electro Hydro Enhancer",
        description: "Advanced hard water treatment solutions for all sectors",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="min-h-screen w-full overflow-x-hidden font-sans">
                <Header />
                <main className="min-h-screen w-full overflow-x-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
