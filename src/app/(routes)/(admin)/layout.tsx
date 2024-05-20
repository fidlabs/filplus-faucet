import "./globals.css";


export default function AdminLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                {/*TODO: Side nav*/}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}