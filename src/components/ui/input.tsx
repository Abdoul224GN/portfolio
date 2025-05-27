export default function Input({className, placeholder}: {className?: string, placeholder: string}) {
    return <>
        <input className={`w-3/4 bg-white/5 border border-white/20 h-auto rounded-md focus:outline-none focus:ring-1 focus:ring-accent py-1 px-3 text-sm placeholder:text-sm ${className}`}
               placeholder={placeholder}/>
    </>
}