export default function LeadCard({ id }: { id: string }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <h2>Lead #{id}</h2>
      <p>Details for this lead will appear here.</p>
    </div>
  );
}
