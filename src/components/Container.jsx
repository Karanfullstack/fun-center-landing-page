export default function Container({ children, size = "1400px", padding = "" }) {
    return <div className={`w-full  ${padding}  max-w-[${size}] m-auto `}>{children}</div>;
}
