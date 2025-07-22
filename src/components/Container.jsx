export default function Container({ children, size = "1400px", padding = "" }) {
    return <div className={`w-full   h-auto ${padding}  max-w-[${size}] m-auto `}>{children}</div>;
}
