import type {Metadata} from "next";
import "./globals.css";
import {barlow} from "@/app/font";
import {Particles} from "@/components/ui/particles"


const metadata: Metadata = {
    title: "Abdoul Karim Diallo",
    description: "Portfolio de Abdoul Karim Diallo développeur web passionné spécialisé en développement front-end et back end. Découvrez mes projet, compétences et experiences.",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={
            barlow.className}>
        <body

        >
        <Particles className={`absolute inset-0 z-0`}/>
        <section>
            {children}
        </section>
        </body>
        </html>
    );
}
