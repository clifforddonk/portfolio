import { Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

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
    <html lang="en" className={nunito.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
