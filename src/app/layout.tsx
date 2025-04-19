import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
    title: "Abdoul Karim Diallo",
    description: "Portfolio de Abdoul Karim Diallo développeur web passionné spécialisé en développement front-end et back end. Découvrez mes projet, compétences et experiences.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body

        >
        {children}
        </body>
        </html>
    );
}
