// Next
import Head from "next/head";
// Components
import Header from "./Header";
import Footer from "./Footer";
// Types
import { styles } from "@/types";

type LayoutProps = {
    title: string;
    header?: styles;
    children: React.ReactNode;
}
export default function Layout({ title, header, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | Fundación Capcana</title>
                <link rel="shortcut icon" href="logo-color.png" type="image/png" />
            </Head>
            <Header styles={header?.styles} />
            {children}
            <Footer />
        </>
    )
}