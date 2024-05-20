import "./globals.css";


export default function UserLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                {children}
            </div>
            <div>
                {/*TODO: Footer nav*/}
            </div>
        </div>
    )
}