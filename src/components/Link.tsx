export default function Link({href, children, ...props}: any) {
    return (
        <a href={href} className="hover:text-accent ">{children}</a>
    )
};