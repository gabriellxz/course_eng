interface propsMain {
    children: React.ReactNode;
    className: string;
}

export default function Main({ children, className }: propsMain) {
    return (
        <main className={className}>
            {children}
        </main>
    );
}