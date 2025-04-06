import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixRain from "./components/MatrixRain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Security & Development Portfolio",
  description: "Portfolio showcasing cybersecurity and development expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh' }} className={inter.className}>
        <MatrixRain />
        <div className="container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">root@portfolio:~#</div>
            </div>
            <div className="terminal-content">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
