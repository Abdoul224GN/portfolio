import {ReactNode} from "react";
import FadeInOpacity from "@/components/FadeInOpacity";

export default function Side({className, orientation, children}: {
    className?: string,
    children: ReactNode,
    orientation: string
}) {
    return <>
        <FadeInOpacity >
            <div
                className={`fixed ${orientation == "left" && `left-12`} ${orientation == "right" && `right-12`} bottom-0 w-0 max-lg:hidden`}>
                <div>
                    <ul className={`flex flex-col items-center w-full`}>
                        <li className={`rotate-90 pr-50 font-thin whitespace-pre`}>{children}</li>
                        <li className={`flex justify-center size-2 items-center`}>
                            <div className={`size-2 rounded-full bg-accent`}></div>
                        </li>
                        <li className={`w-[1.5px] h-[150px] bg-accent`}></li>
                    </ul>
                </div>

            </div>
        </FadeInOpacity>
    </>
};