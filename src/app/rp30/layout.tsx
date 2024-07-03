import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";

export const metadata: Metadata = {
  title: "Método RP30",
  description: "Crie a rotina perfeita em 30 dias com o Método RP30.",
};

const roboto = Roboto_Serif({
    subsets: ['latin'],

});

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className={roboto.className}>
            {children}
        </main>
    );
}