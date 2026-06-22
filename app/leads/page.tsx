export default function LeadsPage() {
  const leads = [
    { id: 1, name: "John Doe", amount: "$12,000" },
    { id: 2, name: "Sarah Smith", amount: "$8,500" },
  ];

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Leads</h1>

      <div className="space-y-3">
        {leads.map((lead) => (
          <a
            key={lead.id}
            href={`/leads/${lead.id}`}
            className="block p-4 bg-white shadow rounded hover:bg-gray-50"
          >
            <p className="font-semibold">{lead.name}</p>
            <p className="text-gray-600">{lead.amount}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
