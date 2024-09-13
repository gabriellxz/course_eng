interface propsHeader {
    children: React.ReactNode;
    className: string;
}

export default function Header({ children, className }: propsHeader) {
    return (
        <header className={className}>
            {children}
        </header>
    );
}