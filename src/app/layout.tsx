import type {Metadata} from "next";
import "./globals.css";
import {barlow} from "@/app/font";


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
        <title>Abdoul Karim Diallo</title>

        <body

        >
        {children}
        </body>
</html>
)
    ;
}
