export default function Header() {
    return <>
        <header className="w-full flex justify-center space-between">
            <div className="border-border border-2 bg-muted w-1/2 rounded-full pl-6 pr-6 flex justify-center gap-10">
                <a href="/" className="text-muted-foreground">Home</a>
                <a href="/">Service</a>
                <a href="/">Resume</a>
                <a href="/">Work</a>
                <a href="/">Contact</a>
            </div>
        </header>
    </>
}