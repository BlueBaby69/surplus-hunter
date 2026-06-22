export default function LeadCard({ id }) {
  return (
    <div className="p-6 bg-white shadow rounded space-y-2">
      <h1 className="text-2xl font-bold">Lead #{id}</h1>
      <p className="text-gray-600">Details about this lead will go here.</p>
    </div>
  );
}
