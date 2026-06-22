import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Surplus Hunter",
  description: "Find and manage surplus leads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
