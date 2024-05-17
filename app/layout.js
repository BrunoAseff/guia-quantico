import { Zen_Maru_Gothic } from "next/font/google";

const Zen = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata = {
  title: "Guia Quântico",
  description: "Generated by Next.js",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Zen.className}>{children}</body>
    </html>
  );
}
