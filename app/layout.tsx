import "./globals.css";
import Navbar from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Surplus Hunter",
  description: "Find and manage surplus leads",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "1rem" }}>{children}</main>

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
