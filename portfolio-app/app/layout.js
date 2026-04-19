import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Arslan | Data Science & ML Portfolio",
  description:
    "Portfolio of Arslan — Data Science student at IIT Madras, specializing in Machine Learning, Python, and Statistics. SIH participant, CS50x certified.",
  keywords: [
    "Arslan",
    "Data Science",
    "Machine Learning",
    "IIT Madras",
    "Python",
    "Portfolio",
    "SIH",
    "CS50x",
  ],
  authors: [{ name: "Arslan" }],
  openGraph: {
    title: "Arslan | Data Science & ML Portfolio",
    description:
      "Data Science student at IIT Madras. ML engineer, SIH participant, CS50x certified.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-[#f0f0f0]">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
