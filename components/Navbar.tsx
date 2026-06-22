import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "#222",
        color: "white",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/leads">Leads</Link>
    </nav>
  );
}
