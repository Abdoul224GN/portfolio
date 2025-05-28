import {jetbrains} from "@/app/font";
import {ReactNode} from "react";

export default function Label({children}: {children: ReactNode} ) {
    return <>
        <label className={`mb-0 text-xs ${jetbrains.className}`}>{children}</label>
    </>
};