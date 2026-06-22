import { supabase } from "../lib/supabase";

export default async function Dashboard() {
  const { count } = await supabase
    .from("leads")
    .select("*", { count: "exact", head: true });

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Surplus Hunter Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Total Leads</h2>
          <p className="text-2xl font-bold">{count}</p>
        </div>
      </div>

      <a
        href="/leads"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        View Leads
      </a>
    </main>
  );
}
