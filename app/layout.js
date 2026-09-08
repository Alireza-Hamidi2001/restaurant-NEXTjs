import Header from "@/app/_components/Header";
import ModalTImeShow from "@/app/_components/ModalTImeShow";
import { Betania_Patmos, Dekko } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: {
        default: "Persian Plate",
        template: "%s | Persian Plate",
    },
    description: "Taste of Persia, From Persia with Love",
};

export const dekko = Dekko({
    weight: "400",
    variable: "--font-dekko",
    subsets: ["latin"],
});

export const betania = Betania_Patmos({
    weight: "400",
    variable: "--font-dekko",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`h-full antialiased`}>
            <body
                className={`relative antialiased bg-primary-950 text-primary-50 min-h-screen flex flex-col`}>
                <Header />
                <div className="flex-1 grid">
                    <main className="mx-auto max-w-8xl w-full">{children}</main>
                </div>
                <ModalTImeShow />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    toastOptions={{
                        duration: 5000,
                        style: {
                            background: "#363636",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "8px 16px",
                        },
                        success: {
                            duration: 3000,
                            style: {
                                background: "#CFFFCC",
                                color: "#056600",
                            },
                            iconTheme: {
                                primary: "#056600",
                                secondary: "#CFFFCC",
                            },
                        },
                        error: {
                            duration: 4000,
                            style: {
                                background: "#FFCCCC",
                                color: "#660000",
                            },
                            iconTheme: {
                                primary: "#f87171",
                                secondary: "#fff",
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
