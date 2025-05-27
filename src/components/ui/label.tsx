import {jetbrains} from "@/app/font";
import {ReactNode} from "react";

export default function Label({children}: {children: ReactNode} ) {
    return <>
        <label className={`mb-0 text-[13px] ${jetbrains.className}`}>{children}</label>
    </>
};