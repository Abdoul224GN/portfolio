import {JavaIcon, NextjsIcon} from "../../public/Image";

export function Badge({children}: { children?: React.ReactNode }) {
    return <>
        <div className="flex items-center gap-2">
            <span className="bg-white/20 border border-white/20 px-3 py-1 rounded-md">
                {children}
            </span>
            <div className="flex-1 h-[1px] bg-accent"/>
        </div>
    </>
};

function Code({ children}: { children?: React.ReactNode }) {
    return <>
        <span className={`inline-flex items-center backdrop-blur-2xl h-[22px] bg-white/10 border border-white/20 px-1 m-1 rounded-sm `}>
            {children}
        </span>
    </>
}
export function JavaCode(){
    return (
        <Code><JavaIcon/> Java</Code>
    )
}
export function NextjsCode(){
    return (
        <Code><NextjsIcon/> Next.js</Code>
    )
}