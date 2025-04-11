import { Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Clifford-Portfolio",
  description: "Personal Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      {" "}
      {/* ✅ Moved outside <html> */}
      <html lang="en" className={nunito.variable}>
        <body className="font-sans antialiased">{children}</body>
      </html>
    </ThemeProvider>
  );
}
